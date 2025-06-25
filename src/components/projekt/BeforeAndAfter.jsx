import React from 'react'
import ButtonMain from '../buttons/ButtonMain'
const BeforeAndAfter = ({ prije, poslije }) => {
    return (
        <div className="beforeAndAfter">
            <h2>Prije i poslije</h2>
            <h3>Fotografije prije i poslije najbolje pokazuju prednosti HomeGrass rješenja.
            </h3>

            <div className="image-container">
                <div className="image"><img loading='lazy' src={prije} alt=" postavljanje umjetne trave - Homegrass" /></div>
                <div className="image"><img loading='lazy' src={poslije} alt=" postavljanje umjetne trave - Homegrass" /></div>
            </div>

            <ButtonMain text={"Transformiraj svoj prostor"} link={"kontakt"} />
        </div>
    )
}

export default BeforeAndAfter