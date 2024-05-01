import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './css/App.css'
import './css/normalize.css'
import NavBar from './Components/NavBar'
import Home from './screens/Home'
import About from './screens/About'

function App() {


  return (
 
      <div className="Nav">
        
        <Router>
          <NavBar />
          <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
          </Routes>
        </Router>
   

      </div>
    
  )
}

export default App
