import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        try {
            if (isInCart(item.id)) {
                const updatedCart = cart.map(cartItem => {
                    if (cartItem.id === item.id) {
                        console.log('Item to add:', {
                            ...cartItem,
                            stock: (cartItem.stock - item.quantity),
                            quantity: (cartItem.quantity + item.quantity)
                        });
                        return {
                            ...cartItem,
                            stock: (cartItem.stock - item.quantity),
                            quantity: (cartItem.quantity + item.quantity)
                        };
                    }
                    return cartItem;
                });
                setCart(updatedCart);
            } else {
                setCart([...cart, { ...item, quantity: item.quantity, stock: (item.stock - item.quantity) }]);
            }
            return { code: 200, message: 'Item updated in cart' };
        } catch (error) {
            return { code: 500, message: 'Error adding item to cart' };
        }
    };

    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([])
    };

    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const getDiscountProducts = () => {
        return (cart.reduce((total, item) => total + ((item.price - (item.price_offer ?? item.price)) * item.quantity), 0)).toFixed(2);
    };

    const getSubtotal = () => {
        return (cart.reduce((total, item) => total + (item.price * item.quantity), 0)).toFixed(2);
    };

    const getTotal = () => {
        return (cart.reduce((total, item) => total + ((item.price_offer ?? item.price) * item.quantity), 0)).toFixed(2);
    }

    return (
        <CartContext.Provider value={{
            cart,
            addItem, removeItem,
            clearCart, isInCart,
            getTotalItems, getDiscountProducts,
            getSubtotal, getTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};