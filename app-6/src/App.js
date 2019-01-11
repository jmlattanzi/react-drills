import React, { Component } from 'react'
import Todo from './components/Todo'
import './App.css'

class App extends Component {
    constructor() {
        super()

        this.state = {
            taskList: [],
            userInput: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({ userInput: e })
    }

    handleClick() {
        let arr = this.state.taskList.slice()
        arr.push(this.state.userInput)

        this.setState({ taskList: arr })
    }

    render() {
        return (
            <div className='App'>
                <h2>🍔</h2>
                <input
                    type='text'
                    onChange={(e) => this.handleChange(e.target.value)}
                    placeholder='🍔'
                />
                <button onClick={() => this.handleClick()}>🍔</button>
                <Todo list={this.state.taskList} />
            </div>
        )
    }
}

export default App
