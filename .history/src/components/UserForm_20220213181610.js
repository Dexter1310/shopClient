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

            <div className="card mt-">
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

                </form>


            </div>
        )

    }

}

export { UserForm };