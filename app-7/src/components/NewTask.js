import React from 'react'

const newTask = (props) => {
    return (
        <div>
            <input type='text' placeholder='🍔' onChange={props.handleChange} />
            <button onClick={props.handleClick}>=></button>
        </div>
    )
}

export default newTask
