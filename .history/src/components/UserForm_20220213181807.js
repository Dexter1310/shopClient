import React, { Component } from "react";

class UserForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',

        }

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
                                placeholder="Escriba su correo"
                            />

                        </div>

                    
                    </div>

                </form>


            </div>
        )

    }

}

export { UserForm };