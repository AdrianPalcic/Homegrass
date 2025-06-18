import React from 'react'

const ProjektChallenges = () => {
    return (
        <div className="projekt-challenges">
            <div className="challenge">
                <h2>Želje Klijenta</h2>
                <p className='subtext'>Klijent je želio pretvoriti stari, neuredni vrt u moderan i uvijek zeleni prostor za obitelj i druženje, bez potrebe za čestim održavanjem.</p>

                <h3>Izazovi:</h3>
                <div className="izazovi-list">
                    <p> <span>-</span> Lijep, prirodan izgled trave tijekom cijele godine</p>
                    <p> <span>-</span> Površina sigurna za djecu i kućne ljubimce</p>
                    <p> <span>-</span> Minimalno održavanje i bez potrebe za zalijevanjem</p>
                    <p> <span>-</span> Brza i uredna ugradnja bez ometanja svakodnevnog života</p>
                    <p> <span>-</span> Rješenje za postojeće probleme s blatom i neravnom terenom</p>
                </div>
            </div>

            <div className="solution">
                <h2>Rješenje Homegrass tima</h2>
                <p className='subtext'>Naš tim je predložio i implementirao <a href='/proizvod/id'>ELEGANCE</a> model umjetne trave, uz dodatnu pripremu terena za postizanje savršene ravnine i dugotrajnosti.</p>

                <h3>Ključni koraci rješenja:</h3>

                <div className="solution-list">
                    <p> <span>-</span> Uklanjanje postojeće vegetacije i nivelacija terena</p>
                    <p> <span>-</span> Ugradnja drenažnog sloja za sprječavanje nakupljanja vode</p>
                    <p> <span>-</span> Postavljanje <a href='/proizvod/id'>ELEGANCE</a> umjetne trave s certificiranom sigurnošću</p>
                    <p> <span>-</span> Brza montaža bez prašine i nepotrebne buke</p>
                    <p> <span>-</span> Završna kontrola i edukacija klijenta o održavanju</p>
                </div>
            </div>
        </div>
    )
}

export default ProjektChallenges