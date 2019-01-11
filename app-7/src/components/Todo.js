import React from 'react'
import List from './List'

const todo = (props) => (
    <div>
        {props.list.map(item => (
            <List>{item}</List>
        ))}
    </div>
)

export default todo
