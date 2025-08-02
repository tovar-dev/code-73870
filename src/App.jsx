import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer title='Bienvenido'/>} />
          <Route path="/categories/:category" element={<ItemListContainer title='Disfruta comprando '/>} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <ItemListContainer initialText="Bienvenido a nuestra tienda" />
      <ItemCount /> */}
      {/* <ItemDetailContainer /> */}
      {/* <ItemListContainer/> */}
    </>
  )
}

export default App
