import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonMain = ({ text, link, label }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${link}`)
    }

    return (
        <div className='button-primary' onClick={handleClick} aria-label={label}>{text}</div>
    )
}

export default ButtonMain