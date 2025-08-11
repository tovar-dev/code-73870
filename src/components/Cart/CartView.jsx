import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartEmpty from './CartEmpty'
import Cart from './Cart'

const CartView = () => {
    const { cart } = useContext(CartContext);
    return (
        <div>
            {cart.length === 0 ? <CartEmpty /> : <Cart />}
        </div>
    )
}

export default CartView