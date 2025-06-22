import React from 'react'

const ProjektChallenges = ({ rjesenje, rjesenja, izazovi, zelja }) => {
    return (
        <div className="projekt-challenges">
            <div className="challenge">
                <h2>Želje Klijenta</h2>
                <p className='subtext'>{zelja}</p>

                <h3>Izazovi:</h3>
                <div className="izazovi-list">

                    {
                        izazovi?.map((izazov, index) => (
                            <p key={index}> <span>-</span> {izazov}</p>
                        ))
                    }

                </div>
            </div>

            <div className="solution">
                <h2>Rješenje Homegrass tima</h2>
                <p className='subtext'>{rjesenje}</p>

                <h3>Ključni koraci rješenja:</h3>

                <div className="solution-list">
                    {rjesenja?.map((r, idx) => (
                        <p key={idx}><span>-</span> {r}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjektChallenges