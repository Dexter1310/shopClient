import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            nom: '',
            e: '',
        }

    }
    render() {
        return (
            <div className='container mt-5'>

                <form className="card-body" method='post' action='/' name='user' onSubmit={(e) => this.handleSubmit(e)}>

                    <div className="row mt-3">
                        <div className="form-group col-6">
                            <input
                                type='email'
                                name='email'
                                className="form-control"
                                placeholder='Email'
                                onChange={(e) => this.handleInput(e)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <input
                                type='password'
                                name='lastName'
                                className="form-control"
                                placeholder='Contraseña'
                                onChange={(e) => this.handleInput(e)}
                            />
                        </div>
                        <div className="col-6">
                            <button className="btn btn-dark" type="submit">Accede</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
