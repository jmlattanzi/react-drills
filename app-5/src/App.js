import React, { Component } from 'react'
import Image from './components/Image'
import './App.css'

class App extends Component {
    constructor() {
        super()

        this.state = {
            imageURL: 'https://i.imgur.com/bb6PN8R.jpg',
        }
    }
    render() {
        return (
            <div className='App'>
                <em>
                    <h2>ugh</h2>
                </em>
                <Image imageURL={this.state.imageURL} />
            </div>
        )
    }
}

export default App
