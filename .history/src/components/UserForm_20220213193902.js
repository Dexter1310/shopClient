import React, { Component } from "react";

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
        console.log(e.target.value,e.target.name);


        

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
                                onChange={ (e) => this.handleInput(e)}
                                className="form-control"
                                placeholder="Escriba su nombre"
                            />

                        </div>

                        <div className="form-group col-6">
                            <input
                                type='text'
                                name='lastName'
                                onChange={ (e) => this.handleInput(e)}
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
                                onChange={ (e) => this.handleInput(e)}
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