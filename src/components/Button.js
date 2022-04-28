import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']

const SIZE = ['btn--medium', 'btn--large']

export const Button = ({children, type, onClick, buttonStyle, buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonSize : STYLES [0]

    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0]

    return (
       <Link to='/sign-up' className='btn-moblie'>
           <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
               {children}
           </button>
       </Link> 
    )
};
