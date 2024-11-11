import { useState } from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Home from './Components/Home'
import Footer from './Components/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default App;
