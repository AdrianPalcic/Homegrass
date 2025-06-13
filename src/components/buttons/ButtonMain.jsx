import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonMain = ({ text, link }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${link}`)
    }

    return (
        <div className='button-primary' onClick={handleClick}>{text}</div>
    )
}

export default ButtonMain