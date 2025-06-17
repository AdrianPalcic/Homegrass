import React, { useState } from 'react'
import Accordion from './Accordion'
import FAQAccordion from '../cards/FAQAccordion';

const Vodic = () => {

    const [povrsina, setPovrsina] = useState("Tvrde Podloge");
    const [openIndex, setOpenIndex] = useState(null);

    const handleChange = (e) => {
        const selected = e.target.innerText;
        setPovrsina(selected);
        setOpenIndex(null);
    };


    const data = {
        "Tvrde Podloge": [
            {
                title: "Instalacija umjetne trave",
                steps: [
                    {
                        src: "/grass4.JPG",
                        text: "1.1 Položimo komade umjetne trave na tlo i počnemo ih otvarati od kuta površine koju želimo prekriti."
                    },
                    {
                        src: "/grass5.JPG",
                        text: "1.2 Travu režemo sa strane obloge pomoću skalpela (Stanley noža). Zatim postavljamo drugi komad trave i poravnavamo oba komada paralelno jedan s drugim. Važno: Provjerite da smjer vlakana ide u istom pravcu."
                    },
                    {
                        src: "/grass6.JPG",
                        text: [
                            "1.3 Za manje površine preporučuje se korištenje ljepljive trake. Podignite i preklopite oba komada umjetne trave. Postavite ljepljivu traku između ta dva komada i vratite ih na tlo tako da se zalijepe za traku pritiskom prema dolje.",
                            "Za veće površine preporučuje se korištenje dvokomponentnog ljepila i spojne trake. Podignite i preklopite oba komada trave. Postavite spojnu traku (sjajnom stranom prema dolje) između dva komada. Ravnomjerno nanesite ljepilo po traci i vratite komade trave na tlo tako da se zalijepe pritiskom prema dolje."
                        ]
                    }
                ]
            },
            {
                title: "Osiguravanje umjetne trave",
                steps: [
                    {
                        src: "/grass7.JPG",
                        text: "Osigurajte rubove pomoću čavala dužine 16 cm, postavljenih na razmak od 30 do 50 cm."
                    }
                ]
            },
            {
                title: "Češljanje umjetne trave",
                steps: [
                    {
                        src: "/grass8.JPG",
                        text: "Nakon završetka ugradnje, uspravite vlakna četkanjem ili puhanjem električnim puhačem u suprotnom smjeru od smjera vlakana."
                    }
                ]
            }
        ],
        "Prirodne Površine": [
            {
                title: "Priprema podloge",
                steps: [
                    {
                        src: "/grass1.JPG",
                        text: "Očistimo površinu od korova i/ili prirodne trave (uklanjanjem iz korijena)."
                    }
                ]
            },
            {
                title: "Postavljanje geotekstila",
                steps: [
                    {
                        src: "/grass 2.JPG",
                        text: "Geotekstil postavljamo preko cijele površine kako bismo smanjili mogućnost rasta korova u budućnosti."
                    }
                ]
            },

            {
                title: "Raspoređivanje pijeska",
                steps: [
                    {
                        src: "/grass3.JPG",
                        text: "Nastavljamo s raspoređivanjem betonskog pijeska u sloju debljine najmanje 3 cm radi boljeg drenažnog učinka. Zatim pijesak zalijemo vodom i pritisnemo valjkom."
                    }
                ]
            },
            {
                title: "Instalacija umjetne trave",
                steps: [
                    {
                        src: "/grass4.JPG",
                        text: "1.1 Položimo komade umjetne trave na tlo i počnemo ih otvarati od kuta površine koju želimo prekriti."
                    },
                    {
                        src: "/grass5.JPG",
                        text: "1.2 Travu režemo sa strane obloge pomoću skalpela (Stanley noža). Zatim postavljamo drugi komad trave i poravnavamo oba komada paralelno jedan s drugim. Važno: Provjerite da smjer vlakana ide u istom pravcu."
                    },
                    {
                        src: "/grass6.JPG",
                        text: [
                            "1.3 Za manje površine preporučuje se korištenje ljepljive trake. Podignite i preklopite oba komada umjetne trave. Postavite ljepljivu traku između ta dva komada i vratite ih na tlo tako da se zalijepe za traku pritiskom prema dolje.",
                            "Za veće površine preporučuje se korištenje dvokomponentnog ljepila i spojne trake. Podignite i preklopite oba komada trave. Postavite spojnu traku (sjajnom stranom prema dolje) između dva komada. Ravnomjerno nanesite ljepilo po traci i vratite komade trave na tlo tako da se zalijepe pritiskom prema dolje."
                        ]
                    }
                ]
            },
            {
                title: "Osiguravanje umjetne trave",
                steps: [
                    {
                        src: "/grass7.JPG",
                        text: "Osigurajte rubove pomoću čavala dužine 16 cm, postavljenih na razmak od 30 do 50 cm."
                    }
                ]
            },
            {
                title: "Češljanje umjetne trave",
                steps: [
                    {
                        src: "/grass8.JPG",
                        text: "Nakon završetka ugradnje, uspravite vlakna četkanjem ili puhanjem električnim puhačem u suprotnom smjeru od smjera vlakana."
                    }
                ]
            }
        ]
    };


    return (
        <div className="vodic" id="vodic">
            <h2 className='vodic-title'>Vodič za samostalnu ugradnju umjetnih travnjaka</h2>
            <h3 className='vodic-subtitle'>Pratite naš korak po korak vodič za ugradnju umjetne trave na bilo kakvoj površini.</h3>

            <div className="vodic-container">
                <h2>Odaberite Vaš tip površine</h2>
                <p className='margin'>Odaberite tip površine na kojoj če te ugraditi umjetne travnjake</p>

                <div className="surface-picker">
                    <div className={`surface ${povrsina === "Tvrde Podloge" ? "surface-active" : ""}`} onClick={handleChange}>
                        Tvrde Podloge
                    </div>
                    <div className={`surface ${povrsina === "Prirodne Površine" ? "surface-active" : ""}`} onClick={handleChange}>
                        Prirodne Površine
                    </div>
                </div>

                <div className="tips">
                    {povrsina === "Tvrde Podloge" ? (
                        <>
                            <h3>Tvrde Podloge</h3>
                            <p>Uključuju cement, asfalt, pločice i ploče. Ovaj vodič se fokusira na instalaciju umjetnih travnjaka na tvrdim površinama u 3 koraka</p>
                        </>
                    ) : (
                        <>
                            <h3>Prirodne Površine</h3>
                            <p>Uključuju prirodnu travu i zemlju. Ovaj vodič se fokusira na instalaciju umjetnih travnjaka na prirodnim površinama u 6 koraka</p>
                        </>
                    )}
                </div>

                <h2>Koraci instalacije</h2>
                <p className='margin'>Slijedite ove korake redom. Kliknite na svaki korak za proširenje i pregled detaljnih uputa.</p>

                {data[povrsina].map((item, index) => (
                    <Accordion
                        key={index}
                        index={index}
                        title={item.title}
                        steps={item.steps}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                ))}



                <FAQAccordion />
            </div>
        </div>
    )
}

export default Vodic