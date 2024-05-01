import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './css/App.css'
import NavBar from './Components/NavBar'
import Home from './screens/Home'
import About from './screens/About'
import History from './screens/History'


function App() {
  return (
    <Router>
      <div className="App">
        <div className="background-image">
          <img src="./img/Trasobares.jpg" alt="" />
          <h2 className='nav_title'>Trasobares</h2>
          <NavBar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/History" element={<History />} />
          </Routes>
        </div>
      </div>
    </Router>
    
    
  );
}

export default App;