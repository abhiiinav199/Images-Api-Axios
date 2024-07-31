import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Gallery from './components/Gallery'
import { Route, Routes } from 'react-router-dom'
import './App.css'
function App() {
  return (
    <div>
      <Nav/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/gallery' element={<Gallery/>}/>


      </Routes>
    </div>
  )
}

export default App