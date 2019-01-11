import React, { Component } from 'react'
import NewTask from './components/NewTask'
import Todo from './components/Todo'
import List from './components/List'
import './App.css'

class App extends Component {
    constructor() {
        super()

        this.state = {
            tasks: [],
            userInput: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({ userInput: e })
    }

    handleClick() {
        let arr = this.state.tasks.slice()
        arr.push(this.state.userInput)

        this.setState({ tasks: arr })
    }

    render() {
        return (
            <div className='App'>
                <h2>todo it again</h2>
                <NewTask
                    handleChange={(e) => this.handleChange(e.target.value)}
                    handleClick={() => this.handleClick()}
                />

                <Todo list={this.state.tasks}/>
            </div>
        )
    }
}

export default App
