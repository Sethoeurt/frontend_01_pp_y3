import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import FillDetails from './pages/FillDetails.jsx'
import MyResume from './pages/MyResume.jsx'
import About from './pages/About.jsx'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/fillDetails' element = {<FillDetails/>} />
          <Route path="/myresume" element={<MyResume />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter >
    </div>
  )
}

export default App
