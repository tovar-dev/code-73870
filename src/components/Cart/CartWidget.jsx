import './cartWidget.css';
import { LuShoppingCart } from "react-icons/lu";

const CartWidget = () => {
    return (
        <div className='cart-widget'>
            <LuShoppingCart className='cart-widget-img'/>
            <span> - 0</span>
        </div>
    )
};

export default CartWidget;