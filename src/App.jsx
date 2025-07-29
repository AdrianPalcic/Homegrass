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
import Hvala from "./pages/Hvala"
import CookieConsent from "./utils/CookieConsent"
import Kolacici from "./pages/Kolacici"
import TermsPage from "./pages/TermsPage"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import { Helmet } from "react-helmet"
import NotFound from "./pages/NotFound"


function App() {

  const setProizvodi = useCMSStore((state) => state.setProizvodi)
  const setProjekti = useCMSStore((state) => state.setProjekti)

  return (
    <>
      <Helmet>
        <title>HomeGrass - Umjetna trava za svaki dom</title>
        <meta name="description" content="HomeGrass nudi vrhunsku umjetnu travu za vrtove, terase i balkone. Bez zalijevanja, bez košnje – samo savršen travnjak kroz cijelu godinu." />
        <meta name="keywords" content="umjetna trava, HomeGrass, trava za vrt, terasa, travnjak, bez održavanja, zelene površine" />
        <meta property="og:title" content="HomeGrass - Umjetna trava koja traje" />
        <meta property="og:description" content="Savršen travnjak tijekom cijele godine. Upoznajte HomeGrass – lidera u umjetnoj travi u Hrvatskoj." />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="canonical" href="https://homegrass.hr" />
      </Helmet>


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
        <Route path="/hvala" element={<Hvala />} />
        <Route path="/kolacici" element={<Kolacici />} />
        <Route path="/uvjeti" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* 404 route */}
        <Route path="*" element={<NotFound />} />

      </Routes>

      <CookieConsent />
      <Footer />
    </>
  )
}

export default App
