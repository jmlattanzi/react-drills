import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
        }

        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleUsername(e) {
        this.setState({ username: e })
    }

    handlePassword(e) {
        this.setState({ password: e })
    }

    handleClick() {
        window.alert(
            `username: ${this.state.username} password: ${this.state.password}`
        )
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder='username'
                    onChange={(e) => this.handleUsername(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='password'
                    onChange={(e) => this.handlePassword(e.target.value)}
                />
                <button onClick={() => this.handleClick()}>Login</button>
            </div>
        )
    }
}

export default Login
