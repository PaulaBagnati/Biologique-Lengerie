import React from 'react'
import CartWidget from './component/CartWidget'
import ItemListContainer from './component/ItemListContainer'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer gretting = "Tenemos la misión de hacer del mundo un lugar más consiente mediante el diseño de productos que sean amigable con su cuerpo, su billetera y el planeta."/>
    </>
  )
}

export default App



