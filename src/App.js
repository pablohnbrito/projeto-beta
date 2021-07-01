import React from 'react'
import Footer from './components/Footer'
import Navegador from './components/Navbar'
import Router from './routes'

function App( { loaded }) {
  
    return (
      <>
        <Navegador />
        <Router />
      </>
    )

     
}

export default App;
