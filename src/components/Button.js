import React from 'react';
import './Button.css'

const Button = ({ action }) => 
    (
        <button onClick={action}>
            Vieillir de 2 ans
        </button>
    )


export default Button;