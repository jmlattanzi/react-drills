import React, { Component } from 'react'
import './App.css'

class App extends Component {
    constructor() {
        super()

        this.state = {
            filtered: [
                'trash 🗑️',
                'shrimp 🍤',
                'bird 🐦',
                'burger 🍔',
                'cheese 🧀',
                'cactus 🌵',
                '🥃',
            ],
            strings: [
                'trash 🗑️',
                'shrimp 🍤',
                'bird 🐦',
                'burger 🍔',
                'cheese 🧀',
                'cactus 🌵',
                '🥃',
            ],
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        let arr = this.state.strings.filter((text) => text.startsWith(e))
        this.setState({ filtered: arr })
    }

    render() {
        return (
            <div className='App'>
                <input
                    type='text'
                    placeholder='🍔'
                    onChange={(e) => this.handleChange(e.target.value)}
                />

                {this.state.filtered.map((e) => (
                    <h2>{e}</h2>
                ))}
            </div>
        )
    }
}

export default App
