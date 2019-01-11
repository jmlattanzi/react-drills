import React from 'react'

const todo = (props) => (
    <div>
        {props.list.map((text) => (
            <h3>🍔 {text}</h3>
        ))}
    </div>
)

export default todo
