import React from 'react'
import { Feather, Flower, PiggyBank, ShieldPlus } from 'lucide-react'

const Kvalifikacije = () => {
    return (
        <div className="kvalifikacije">
            <div className="kvalifikacije-card">
                <Feather className='img' />
                <h3>Lakoća Održavanja</h3>
                <p>Naši proizvodi zahtijevaju minimalnu njegu. Provedite vrijeme uživajući u vrtu.</p>
            </div>
            <div className="kvalifikacije-card">
                <Flower className='img' />
                <h3>Ljepota prostora</h3>
                <p>Estetika je bitna svima. Stvorite svoj zeleni kutak, kroz cijelu godinu.</p>
            </div>
            <div className="kvalifikacije-card">
                <ShieldPlus className='img' />
                <h3>Odgovornost i sigurnost</h3>
                <p>Hipoalergeni i netoksični proizvodi za vaš ekološki prihvatljiv vrt.</p>
            </div>
            <div className="kvalifikacije-card">
                <PiggyBank className='img' />
                <h3> Ekonomičnost</h3>
                <p>Uštedite novac zahvaljujući minimalnim potrebama održavanja i bez zalijevanja.</p>
            </div>
        </div>
    )
}

export default Kvalifikacije