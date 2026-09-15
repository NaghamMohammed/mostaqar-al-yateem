import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Aids from './pages/Aids'
import Orphans from './pages/Orphans'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aids" element={<Aids />} />
        <Route path="/orphans" element={<Orphans />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App