import React from 'react'

const FormButtonSecondary = ({ text, label }) => {
    return (

        <button className='form-button-secondary' type='submit' aria-label={label}>{text}</button>

    )
}

export default FormButtonSecondary