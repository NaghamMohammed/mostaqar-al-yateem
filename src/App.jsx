import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Aids from './pages/Aids'
import Orphans from './pages/Orphans'

function App() {

  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <BrowserRouter>

      <Header
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />
      
      <WhatsAppButton />

      <Routes>

        <Route path="/" element={<Home setSearchOpen={setSearchOpen}/>}/>

        <Route path="/aids" element={<Aids />} />

        <Route path="/orphans" element={<Orphans />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App