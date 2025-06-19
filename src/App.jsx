import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Naslovna from "./pages/Naslovna"
import Kontakt from "./pages/Kontakt"
import DIY from "./pages/DIY"
import ONama from "./pages/ONama"
import Proizvod from "./pages/Proizvod"
import Proizvodi from "./pages/Proizvodi"
import Projekti from "./pages/Projekti"
import Projekt from "./pages/Projekt"
import Navbar from "./components/navigation/Navbar"
import Footer from "./components/global/Footer"
import ScrollToTop from "./utils/ScrollToTop"

import FetchCPT from "./utils/FetchCPT";
import useCMSStore from "./store/useCMSStore"


function App() {

  const setProizvodi = useCMSStore((state) => state.setProizvodi)
  const setProjekti = useCMSStore((state) => state.setProjekti)

  return (
    <>
      <FetchCPT endpoint="proizvod" setState={setProizvodi} />
      <FetchCPT endpoint="projekt" setState={setProjekti} />


      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Naslovna />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/vodic" element={<DIY />} />
        <Route path="/onama" element={<ONama />} />
        <Route path="/proizvodi" element={<Proizvodi />} />
        <Route path="/proizvod/:id" element={<Proizvod />} />
        <Route path="/projekti" element={<Projekti />} />
        <Route path="/projekt/:id" element={<Projekt />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
