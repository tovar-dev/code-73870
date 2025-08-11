import React from 'react'
import './CartEmpty.css';
import { LuShoppingCart, LuArrowRight } from "react-icons/lu";
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div className='cart-empty'>
      <LuShoppingCart className='cart-empty-icon' />
      <h2 className='cart-empty-title'>
        Tu carrito está vacío
      </h2>
      <p className='cart-empty-description'>
        Aún no tienes productos en tu carrito.
        Empieza agregando algunos y disfruta de tu pedido! 🛍️
      </p>
      <Link to="/" className='btn-primary' >
        Seguir comprando
        <LuArrowRight />
      </Link>
    </div>
  )
}

export default CartEmpty