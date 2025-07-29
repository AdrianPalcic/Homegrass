import React from 'react'
import Navbar from '../components/navigation/Navbar'
import "../css/not-found.css";
import ButtonMain from '../components/buttons/ButtonMain';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oops, ova stranica ne postoji</h1>
      <p>Možda je uklonjena, premještena ili nikad nije ni postojala.
Ali nema brige – vratimo Vas na pravu stazu.</p>
<br></br>
<ButtonMain text={"Povratak na Naslovnu"} link={""} />
    </div>
  )
}

export default NotFound