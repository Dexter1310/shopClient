import React, { Component } from "react";
import { API_BASE_URL } from "../config";
import { Users } from "../Users";
import { useParams } from "react-router-dom";



class UserForm extends Component {

    constructor() {
        super();
        this.state = {
            nom: '',
            lastName: '',
            mail: '',
            buttonSubmit: 'Agregar',
            id: null,
            title: 'Registro gratuito',
            errors: {},
            pass: '',
            pass2: '',
        }
    }

    async componentDidMount() {
        const data = [];

        if (this.props.id) {//edit user 
            const resUser = await fetch(API_BASE_URL + '/api/user/' + this.props.id);
            const data = await resUser.json();
            this.state.buttonSubmit = 'Modifica';

            this.state.nom = data.name; this.state.lastName = data.lastname; this.setState({ mail: data.email });
            this.state.title = 'Modifica el usuario ' + data.name + ' ' + data.lastname;


        }

    }


    async handleInput(e) {

        const { value, name } = e.target;
        this.setState({ [name]: value });

        let errors = {};
        let formIsValid = false;


        // //Name
        // if (this.state.nom.length < 1) {
        //     this.state.errors['nom'] = 'Debes añadir un nombre';
        // } else if (!this.state.nom.match(/^[a-zA-Z]+$/)) {
        //     this.state.errors['nom'] = 'Debe contener solo letras ';
        // } else {
        //     this.state.errors['nom'] = '';
        //     formIsValid = true;
        // }

        // //lastName
        // if (this.state.lastName.length < 1) {
        //     this.state.errors['lastName'] = 'Debes añadir algún  apellido ';
        // } else if (!this.state.lastName.match(/^[a-zA-Z]+$/)) {
        //     this.state.errors['lastName'] = 'Debe contener solo letras ';
        // } else {
        //     this.state.errors['lastName'] = '';
        //     formIsValid = true;
        // }

        //password
        //  console.log('contraseña 1: '+this.state.pass);
        //  console.log('contraseña 2: '+this.state.pass2);
        this.state.errors['pass'] = '';


        if (this.state.pass != this.state.pass2) {
            this.state.errors['pass'] = 'La contraseña no coincide';
        }


    }

    async handleSubmit(e) {

        e.preventDefault();
        if (this.props.id) {
            this.state.id = this.props.id;
        }

        const us = JSON.stringify(this.state);
        const response = await fetch(API_BASE_URL + '/api/addUser', {
            method: "post",
            body: us
        });
        window.location.href = '/';
    }


    render() {

        return (

            <div className="pt-3 container">
                <h4>{this.state.title}</h4>
                <form className="card-body" method='post' action='/' name='user' onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="row">

                        <div className="form-group col-6">
                            <small style={{ color: "red" }}>{this.state.errors['nom']}</small>
                            <input
                                required
                                type='text'
                                name='nom'
                                className="form-control"
                                placeholder='nombre'
                                value={this.state.nom}
                                onChange={(e) => this.handleInput(e)}
                            />

                        </div>

                        <div className="form-group col-6">
                            <small style={{ color: "red" }}>{this.state.errors['lastName']}</small>
                            <input
                                required
                                type='text'
                                name='lastName'
                                className="form-control"
                                placeholder='Apellidos'
                                value={this.state.lastName}
                                onChange={(e) => this.handleInput(e)}
                            />

                        </div>
                    </div>


                    <div className="row mt-3">
                        <div className="form-group col-6">
                            <input
                                required
                                type='password'
                                name='pass'
                                className="form-control"
                                placeholder='Contraseña'
                                value={this.state.pass}
                                onChange={(e) => this.handleInput(e)}

                            />

                        </div>

                        <div className="form-group col-6">
                            <input
                                required
                                type='password'
                                name='pass2'
                                className="form-control"
                                placeholder='Repita contraseña'
                                value={this.state.pass2}
                                onChange={(e) => this.handleInput(e)}

                            />

                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="form-group col-6">
                            <input
                                required
                                type='email'
                                name='mail'
                                className="form-control"
                                placeholder='Email'
                                value={this.state.mail}
                                onChange={(e) => this.handleInput(e)}
                            />
                        </div>
                        <div className="col-6">
                            <button className="btn btn-dark" type="submit" >{this.state.buttonSubmit}</button>
                            {/* <p><small style={{ color: "red" }}>{this.state.errors['pass']}</small></p> */}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export { UserForm };