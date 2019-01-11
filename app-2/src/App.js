import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
    constructor() {
        super()

        this.state = {
            strings: [
                'oh boy',
                'what do',
                'i type here',
                "i'm out of ideas",
                '🍔',
            ],
        }
    }

    render() {
        return (
            <div className='App'>
                {this.state.strings.map((str) => (
                    <h2>{str}</h2>
                ))}
            </div>
        )
    }
}

export default App
