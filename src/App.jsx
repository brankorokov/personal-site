import { useState } from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Resume from './Components/Resume'

import './App.css'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Resume />
        <Footer />
      </div>
    </>
  )
}

export default App;
