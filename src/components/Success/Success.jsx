import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import '../Cart/Cart.css';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../service/Firebase';
import Loader from '../Loader/Loader';

const Success = () => {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);

    const { orderId } = useParams();

    useEffect(() => {
        setLoading(true);
        const orderRef = doc(db, 'orders', orderId);
        getDoc(orderRef)
            .then((doc) => {
                console.log('Document data:', doc.data());
                if (doc.exists()) {
                    setOrder({ id: doc.id, ...doc.data() });
                    setLoading(false);
                } else {
                    console.error("No such document!");
                    window.location.href = '/';
                    setLoading(true);
                }
            })
            .catch(err => { console.error(err) });
    }, []);

    const cart = order?.items || [];

    const totalDiscount = order?.total.discount;
    const subTotal = order?.total.subtotal;
    const total = order?.total.total;

    const getDiscountPerProduct = (item) => {
        if (item.price_offer) {
            return ((item.price - item.price_offer) * item.quantity).toFixed(2);
        }
        return 0;
    };

    return (
        <div>
            {loading
                ? (<Loader />)
                : (<div>
                    <h2 className='cart-title'>✅ ¡Compra exitosa!</h2>
                    <div className='cart-container'>
                        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                            <h3>Gracias por tu compra</h3>
                            <p>Tu orden ha sido procesada exitosamente</p>
                            {/* <p>{order.id}</p> */}
                        </div>

                        {/* Show a list of purchased products */}
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

                        {/* Order summary */}
                        <div className='cart-summary'>
                            <p>Subtotal: ${subTotal}</p>
                            {totalDiscount > 0 ? <p>Descuento: ${totalDiscount}</p> : <></>}
                            <p><strong>Total pagado: ${total}</strong></p>
                            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                                <Link to='/' className='btn-primary'>
                                    Seguir comprando
                                </Link>
                                {/* <Link to='/mis-ordenes' className='btn-secondary'>
              Ver mis órdenes
            </Link> */}
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Success