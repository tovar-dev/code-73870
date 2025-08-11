import './cartWidget.css';
import { LuShoppingCart } from "react-icons/lu";
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {

    const {getTotalItems} = useContext(CartContext);

    return (
        <div className='cart-widget'>
            <LuShoppingCart className='cart-widget-img'/>
            <span> {getTotalItems()}</span>
        </div>
    )
};

export default CartWidget;