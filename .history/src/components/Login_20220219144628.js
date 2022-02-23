import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            pass: '',
            email: '',
        }
    }

    handleInput(e) {

        const { value, name } = e.target;
        this.setState({ [name]: value });
        // console.log(this.state);
    }


    render() {
        return (
       <h1></h1>
        );
    }
}
