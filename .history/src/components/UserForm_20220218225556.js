import React, { Component } from "react";
import { useParams } from "react-router";
import { API_BASE_URL } from "../config";
import { Users } from "../Users";


class UserForm extends Component {
    
    constructor() {
        super();
        this.state = {
            nom: '',
            lastName: '',
            email: '',

        }
        
    }
    async componentDidMount() {
        
    }



    handleInput(e) {

        const { value, name } = e.target;
        this.setState({ [name]: value });
        console.log(this.state);
       
    }

    async handleSubmit(e) {
        e.preventDefault();
     
        const us = JSON.stringify(this.state);
        const response = await fetch(API_BASE_URL + '/api/addUser', {
            method: "post",
            body: us
        });
        window.location.href='/';
        // return response.JSON;
    }



    render() {
 
        return (

            <div className="pt-3 container">
                <h4>Registro gratuito</h4>
                <form className="card-body" method='post' action='/' name='user' onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="row">
                        <div className="form-group col-6">
                            <input
                                type='text'
                                name='nom'
                                className="form-control"
                                placeholder="Escriba su nombre"
                                onChange={(e) => this.handleInput(e)}
                            />

                        </div>

                        <div className="form-group col-6">
                            <input
                                type='text'
                                name='lastName'
                                className="form-control"
                                placeholder="Escriba sus apellidos"
                                onChange={(e) => this.handleInput(e)}
                            />

                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="form-group col-6">
                            <input
                                type='email'
                                name='email'
                                className="form-control"
                                placeholder="email"
                                onChange={(e) => this.handleInput(e)}
                            />
                        </div>
                        <div className="col-6">
                            <button className="btn btn-dark" type="submit">Registro</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export { UserForm };