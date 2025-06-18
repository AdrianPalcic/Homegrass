import React from 'react'
import '../css/loadingscreen.css'
import MySVG from './MySVG'


const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <MySVG loading={true} />
            <p>Učitavanje...</p>
        </div>
    )
}

export default LoadingScreen
