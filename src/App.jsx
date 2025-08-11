import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import { CartProvider } from './context/CartContext'
import CartView from './components/Cart/CartView'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer title='Bienvenido' />} />
            <Route path="/categories/:category" element={<ItemListContainer title='Disfruta comprando ' />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Checkout />} />
            {/* Catch-all route for 404 Not Found */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
