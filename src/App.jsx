import { Route, Routes, Link } from 'react-router-dom'
import './index.css'
import Blue from './components/blue'
import Red from './components/red'
import Home from './components/home'
import Green from './components/green'
import Yellow from './components/yellow'
import Purple from './components/purple'

function App() {

  return (
    <>
<div id="container">
      <div id="navbar">
        <Link to="/home">Home</Link>
       <Link to="/blue">Blue</Link>
       <Link to="/red">Red</Link>
       <Link to="/green">Green</Link>
       <Link to="/yellow">Yellow</Link>
       <Link to="/purple">Purple</Link> 
        </div>
      <div id="main-section">
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/green" element={<Green />} />
          <Route path="/yellow" element={<Yellow />} />
          <Route path="/purple" element={<Purple />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
