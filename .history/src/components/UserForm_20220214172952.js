import React, { Component } from "react";
import { API_BASE_URL } from "../config";

class UserForm extends Component {
    constructor() {
        super();
        this.state = {
            nom: '',
            lastName: '',
            email: '',

        }

    }

    handleInput(e) {

        const { value, name } = e.target;
        this.setState({ [name]: value });
        console.log(this.state);
    }

    async handleSubmit(e) {

        e.preventDefault();
        const us = JSON.stringify(this.state);
        // const csrfToken = document.querySelector("meta[name=csrf-token]").content;
        const resp = await fetch(API_BASE_URL + '/api/addUser', {
            method: 'post',
            
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:8080".
              "Content-Type": "application/vnd.api+json",
            //   "X-CSRF-Token": csrfToken
            },
            body: us,

        });


        console.log(us);

    }


    render() {



        return (

            <div className="pt-3 container">
                <h4>Registro gratuito</h4>
                <form className="card-body" method='post' name='user' onSubmit={(e) => this.handleSubmit(e)}>
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