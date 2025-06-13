import React from 'react'
import ButtonMain from '../buttons/ButtonMain'

const CTA = () => {
    return (
        <div className="cta">
            <h2>Imate pitanje ili trebate savjet?</h2>
            <h3>Naš tim vam stoji na raspolaganju – kontaktirajte nas bez obaveze!</h3>
            <ButtonMain text={"Pošaljite Upit"} link={"kontakt"} />
        </div>
    )
}

export default CTA