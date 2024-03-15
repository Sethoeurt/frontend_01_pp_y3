// from installed dependencies
import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

// from components 
import Footer from './components/Footer.jsx'
import Navbar from './components/AppNavBar/Navbar.jsx'

// from pages 
import About from './pages/About.jsx'
import FillDetails from './pages/FillDetails.jsx'
import Home from './pages/Home.jsx'
import MyResume from './pages/MyResume.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/filldetails' element = {<FillDetails/>} />
          <Route path="/myresume" element={<MyResume />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App
