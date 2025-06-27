import React from 'react'

const FormButton = ({ text, label }) => {
    return (

        <button className='form-button' type='submit' aria-label={label}>{text}</button>

    )
}

export default FormButton