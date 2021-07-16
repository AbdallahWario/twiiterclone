import React from 'react'
import './icon.css'

const Icon = ({title,Icon}) => {
    return (
        <div className="icon">
            {Icon && <Icon className="materialicon" />}
             <h4>{title}</h4>

            
        </div>
    )
}

export default Icon
