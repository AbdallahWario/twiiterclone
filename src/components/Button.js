import React from 'react'
import './button.css'

const Button = ({value}) => {
    return (
        <div >
            <button className="button" >{value}</button>
        </div>
    )
}

export default Button
