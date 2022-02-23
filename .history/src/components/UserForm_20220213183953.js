import React, { Component } from "react";
import { Component } from "react";
class UserForm extends Component


{
    constructor() {
        super();
        this.state = {
            name: '',
            lastname: '',
            email: '',

        }

    }


    handleInput(e){
        console.log(e.target.value);
    }

    render() {

        return (

            <div className="card pt-3">
                <h4>Registro gratuito</h4>
                <form className="card-body">
                    <div className="row">
                        <div className="form-group col-6">
                            <input
                                type='text'
                                name='name'
                                onChange={ () => this.handleInput()}
                                className="form-control"
                                placeholder="Escriba su nombre"
                            />

                        </div>

                        <div className="form-group col-6">
                            <input
                                type='text'
                                name='lastName'
                                className="form-control"
                                placeholder="Escriba sus apellidos"
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