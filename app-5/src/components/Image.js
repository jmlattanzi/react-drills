import React from 'react'
import '../App.css'

const image = (props) => (
    <div>
        <img className='cat' src={props.imageURL} alt='image' />
    </div>
)

export default image
