import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = ({ title, steps, isOpen, onClick, index }) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    const waitForImages = (container, callback) => {
        const images = container.querySelectorAll('img');
        let loaded = 0;

        if (images.length === 0) {
            callback();
            return;
        }

        images.forEach(img => {
            if (img.complete) {
                loaded++;
            } else {
                img.onload = img.onerror = () => {
                    loaded++;
                    if (loaded === images.length) {
                        callback();
                    }
                };
            }

            if (loaded === images.length) {
                callback();
            }
        });
    };

    useEffect(() => {
        if (isOpen && contentRef.current) {
            waitForImages(contentRef.current, () => {
                requestAnimationFrame(() => {
                    setHeight(contentRef.current.scrollHeight);
                });
            });
        }
    }, [isOpen, steps]);

    return (
        <div className="accordion">
            <button className="accordion-header" onClick={onClick}>
                {index + 1 + "."} {title}
                <span>{isOpen ? '−' : '+'}</span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0 }}
                        animate={{ height }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div ref={contentRef} className="accordion-content">
                            {steps.map((step, idx) => (
                                <div key={idx} className="accordion-step">
                                    <img src={step.src} alt={`korak-${title}-${idx}`} loading="lazy" />
                                    {Array.isArray(step.text) ? (
                                        step.text.map((t, i) => <p key={i}>{t}</p>)
                                    ) : (
                                        <p>{step.text}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Accordion;
