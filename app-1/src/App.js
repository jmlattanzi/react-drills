import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ userInput: e })
    }

    render() {
        return (
            <div className='App'>
                <input
                    type='text'
                    onChange={(e) => this.handleChange(e.target.value)}
                />
                <p>{this.state.userInput}</p>
            </div>
        )
    }
}

export default App
