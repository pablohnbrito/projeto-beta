import React from 'react'
import Navegador from './components/Navbar'
import Router from './routes'
import Footer from './components/Footer'

function App( { loaded }) {
  
    return (
      <div>
        <Navegador />
        <Router />
        <Footer />
      </div>
    )

     
}

export default App;
