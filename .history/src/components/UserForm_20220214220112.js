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
        const response = await fetch(API_BASE_URL + '/api/addUser', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: us // body data type must match "Content-Type" header
        });

        const p= response.json();

        console.log(p)

        return p;
       
    
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