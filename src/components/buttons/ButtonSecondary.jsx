import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonSecondary = ({ text, link }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${link}`)
    }

    return (
        <div className='button-secondary' onClick={handleClick}>{text}</div>
    )
}

export default ButtonSecondary