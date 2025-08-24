import { createOrderFirebase } from "../../service/Firebase/Order";

export const createOrder = async(cart, customer, total) => {
    try {
        const order = {
            items: cart,
            customer: customer,
            total: total,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            deleted_at: null
        };
        const orderId = await createOrderFirebase(order);
        console.log('Order ID received:', orderId);
        return { code: 200, message: 'Order created successfully', orderId: orderId };
    } catch (error) {
        return { code: 500, message: 'Error creating order' };
    }
};

export const discountStock = (cart) => {
    cart = cart.map(item => ({
        ...item,
        stock: item.stock - item.quantity,
        quantity: 0
    }));
    console.log('Discounted stock:', cart);
    return cart;
};