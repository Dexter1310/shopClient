import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>Login

                <form className="card-body" method='post' action='/' name='user' onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="row">
                  

                        <div className="form-group col-6">
                            <input
                                type='text'
                                name='lastName'
                                className="form-control"
                                placeholder=
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
                                placeholder={this.state.email}
                                onChange={(e) => this.handleInput(e)}
                            />
                        </div>
                        <div className="col-6">
                            <button className="btn btn-dark" type="submit">{this.state.buttonSubmit}</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
