import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, getDiscountProducts, getSubtotal, getTotal } = useContext(CartContext);

  const totalDiscount = getDiscountProducts();
  const subTotal = getSubtotal();

  const getDiscountPerProduct = (item) => {
    if (item.price_offer) {
      return ((item.price - item.price_offer) * item.quantity).toFixed(2);
    }
    return 0;
  };

  const handleClearCart = () => {
    if (window.confirm('¿Estás seguro de que deseas limpiar el carrito?')) {
      clearCart();
    }
  };

  return (
    <div>
      <h2 className='cart-title'>🛒 Mi carrito</h2>
      <div className='cart-container'>
        {/* Show a list of cart's product */}
        <div className='cart-table'>
          <div className='cart-table-header'>
            <div className='header-cell'>Producto</div>
            <div className='header-cell'>Nombre</div>
            <div className='header-cell'>Precio</div>
            <div className='header-cell'>Cantidad</div>
            <div className='header-cell'>Descuento</div>
            <div className='header-cell'>Subtotal</div>
          </div>
          {cart.map((item) => (
            <div key={item.id} className='cart-table-row'>
              <div className='cart-cell'>
                <img src={item.image} alt={item.name} className='cart-item-img' />
              </div>
              <div className='cart-cell'>{item.name}</div>
              <div className={item.price_offer ? 'cart-cell color-discount' : 'cart-cell'}>${item.price_offer ?? item.price}</div>
              <div className='cart-cell'>{item.quantity}</div>
              <div className='cart-cell'>${getDiscountPerProduct(item)}</div>
              <div className='cart-cell'>${((item.price_offer ?? item.price) * item.quantity).toFixed(2)}</div>
            </div>
          ))}
        </div>

        {/* Total, taxes, discount and that stuff */}
        <div className='cart-summary'>
          <p>Subtotal: ${subTotal}</p>
          {totalDiscount > 0 ? <p>Descuento: ${totalDiscount}</p> : <></>}
          <p>Total: ${getTotal()}</p>
          <button className='btn-secondary' onClick={handleClearCart}>
            Limpiar carrito
          </button>
          <Link to='/checkout' className='btn-primary'>
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart