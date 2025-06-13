import { FileText, Hammer, MessageCircle, Package, Ruler } from 'lucide-react'
import React from 'react'

const Proces = () => {
    return (
        <div className="proces">
            <h2>Naš Proces</h2>
            <h3>S vama smo na svakom koraku</h3>

            <div className="proces-grid">
                <div className="proces-item">
                    <MessageCircle className='img' />
                    <h3>Savjetovanje i planiranje</h3>
                    <p>Zajedno s vama osluškujemo sve vaše želje i ideje za vrt, te predlažemo najbolje rješenje.</p>
                </div>
                <div className="proces-item">
                    <Package className='img' />
                    <h3>Odabir i uzorci</h3>
                    <p>Predstavljamo vam proizvode uživo ili šaljemo besplatne uzorke na vašu adresu.</p>
                </div>
                <div className="proces-item">
                    <Ruler className='img' />
                    <h3>Izmjera i procjena</h3>
                    <p>Detaljno pregledavamo vašu površinu i izrađujemo precizan plan ugradnje.</p>
                </div>
                <div className="proces-item">
                    <FileText className='img' />
                    <h3>Ponuda</h3>
                    <p>Dajemo vam jasnu ponudu s točnim troškovima od početka do kraja projekta.</p>
                </div>
                <div className="proces-item">
                    <Hammer className='img' />
                    <h3>Stručna ugradnja</h3>
                    <p>Naš tim postavlja travu profesionalno, brzo i diskretno, po dogovoru.</p>
                </div>
            </div>
        </div>
    )
}

export default Proces