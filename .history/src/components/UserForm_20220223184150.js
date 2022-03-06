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
            email: '',
            buttonSubmit: 'Agregar',
            id: null,
            title: 'Registro gratuito',
            errors: {},


        }

    }

    async componentDidMount() {
        const data = [];

        if (this.props.id) {//edit user 
            const resUser = await fetch(API_BASE_URL + '/api/user/' + this.props.id);
            const data = await resUser.json();
            this.state.buttonSubmit = 'Modifica';
            this.state.nom = data.name; this.state.lastName = data.lastname;
            this.state.title = 'Modifica el usuario ' + data.name + ' ' + data.lastname;


        }

    }


    handleInput(e) {

        const { value, name } = e.target;
        this.setState({ [name]: value });

        let errors = {};
        let formIsValid = true;

        console.log(this.state.nom.length)

    //Name
    if (this.state.nom.length == 0) {
        formIsValid = false;
        this.state.errors['nom']='Debes añadir un nombre';
      }else{
        this.state.errors['nom']='';
      }

       //lastName
    if (this.state.lastName.length == 0) {
        formIsValid = false;
        this.state.errors['lastName']='Debes añadir algún  apellido ';
      }if (this.state.lastName.match(/^[a-zA-Z]+$/)) {
        this.state.errors['lastName']='Debes añadir algún  apellido ';
      }else{
        this.state.errors['lastName']='';
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
        // window.location.href = '/';
    }



    render() {



        return (

            <div className="pt-3 container">
                <h4>{this.state.title}</h4>
                <form className="card-body" method='post' action='/' name='user' onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="row">

                        
                
                        <div className="form-group col-6">
                        <span style={{ color: "red" }}>{this.state.errors['nom']}</span>
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
                        <span style={{ color: "red" }}>{this.state.errors['lastName']}</span>
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
                                onChange={(e) => this.handleInput(e)}
                            />

                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="form-group col-6">
                            <input
                                required
                                type='email'
                                name='email'
                                className="form-control"
                                placeholder='Email'
                                value={this.state.email}
                                onChange={(e) => this.handleInput(e)}
                            />
                        </div>
                        <div className="col-6">
                            <button className="btn btn-dark" type="submit" >{this.state.buttonSubmit}</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export { UserForm };