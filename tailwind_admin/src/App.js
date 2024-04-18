import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Error from './pages/Error';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/services' element={<Services/>}/>
          <Route  path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App