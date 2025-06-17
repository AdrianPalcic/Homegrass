import React, { useRef, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
    {
        question: "Koliko traje umjetna trava?",
        answer: "Umjetna trava obično traje između 10 i 15 godina, ovisno o korištenju i održavanju.",
    },
    {
        question: "Je li umjetna trava sigurna za djecu i kućne ljubimce?",
        answer: "Da, većina umjetnih trava je netoksična i sigurna za igru djece i kućne ljubimce.",
    },
    {
        question: "Trebam li zalijevati umjetnu travu?",
        answer: "Ne, zalijevanje nije potrebno, osim povremenog ispiranja radi čišćenja.",
    },
    {
        question: "Mogu li je sam postaviti ili trebam profesionalca?",
        answer: "Postavljanje je moguće i samostalno, no profesionalna ugradnja osigurava dugotrajniji rezultat.",
    },
];

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (openIndex !== null && contentRef.current) {
            // Delay mjerenje visine kako bi DOM završio render
            requestAnimationFrame(() => {
                setContentHeight(contentRef.current.scrollHeight);
            });
        }
    }, [openIndex]);

    return (
        <div className="faq-accordion">
            <h2>Često postavljana pitanja</h2>
            {faqs.map((item, index) => (
                <div key={index} className="faq-item">
                    <button
                        className="faq-question"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        {item.question}
                        <span>{openIndex === index ? "−" : "+"}</span>
                    </button>

                    <AnimatePresence initial={false}>
                        {openIndex === index && (
                            <motion.div
                                key="faq-answer"
                                initial={{ height: 0 }}
                                animate={{ height: contentHeight }}
                                exit={{ height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                style={{ overflow: "hidden" }}
                            >
                                <div ref={contentRef} style={{ paddingTop: 10, paddingBottom: 10 }}>
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
