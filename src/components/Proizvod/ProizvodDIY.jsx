import React from 'react'
import ButtonMain from '../buttons/ButtonMain'
import { Check } from 'lucide-react'

const ProizvodDIY = () => {
    return (
        <div className="proizvod-diy-hero">
            <div className="proizvod-diy-hero-left">
                <h2>Želite postaviti proizvod sami? </h2>
                <h3>Nema problema! Pripremili smo detaljan DIY vodič uz sve savjete i korake potrebne za samostalnu i uspješnu instalaciju umjetne trave. Isprobajte jednostavan i brz način za savršen rezultat – u vlastitom aranžmanu.</h3>
                <div className="checkboxes">
                    <p><Check className='check' /> <strong>Ušteda novca:</strong> Sami instalirajte i izbjegnite troškove profesionalne ugradnje.</p>
                    <p><Check className='check' /> <strong>Fleksibilnost:</strong> Radite tempom koji vama odgovara, kada god želite.</p>
                    <p><Check className='check' /> <strong>Osjećaj ponosa:</strong>  Uživajte u vlastitom rezultatu i dodatno cijenite svoj zeleni prostor.</p>
                </div>
                <ButtonMain text={"Prikaži korake postavljanja"} link={"vodic"} />
            </div>
            <div className="proizvod-diy-hero-right">
                <div className="image">
                    <img src="/prozivod-diy-hero.webp" alt="Dobrodošli u Homegrass, vaš najbolji dobavljač umjetne trave" />
                </div>
            </div>
        </div>
    )
}

export default ProizvodDIY