import { Clock, Smile, Wallet } from 'lucide-react'
import React from 'react'

const Prednosti = () => {
    return (
        <div className="prednosti">
            <h2>Zašto odabrati samostalnu ugradnju?</h2>
            <h3>DIY postavljanje umjetne trave donosi uštedu, fleksibilnost i zadovoljstvo vlastitim rezultatom – uz naš vodič, sve je jednostavno i izvedivo.</h3>

            <div className="prednosti-card-container">
                <div className="prednosti-card">
                    <Wallet className='image' />
                    <h3>Ušteda Novca</h3>
                    <p>Sami instalirajte i izbjegnite troškove profesionalne ugradnje.</p>
                    <span>Bez dodatnih troškova za montažu.</span>
                </div>
                <div className="prednosti-card">
                    <Clock className='image' />
                    <h3>Fleksibilnost</h3>
                    <p>Radite tempom koji vama odgovara, kada god želite.</p>
                    <span>Birate vlastiti tempo i vrijeme rada.</span>
                </div>
                <div className="prednosti-card">
                    <Smile className='image' />
                    <h3>Osjećaj ponosa</h3>
                    <p>Uživajte u vlastitom rezultatu i dodatno cijenite svoj zeleni prostor.</p>
                    <span>Zadovoljstvo kada sami dovršite projekt.</span>
                </div>
            </div>
        </div>
    )
}

export default Prednosti