import React from 'react'

import Header from './principal/Header';
import Home from './principal/Home';
import About from './principal/About';
import Contacto from './principal/Contacto';
import Footer from './principal/Footer';
import Services from './principal/Services';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Home />
      <About />
      <Services />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App

