import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";


export const createOrderFirebase = async (order) => {
    try {
        const orderRef = collection(db, "orders")
        const res = await addDoc(orderRef, order);
        return res.id;
    } catch (error) {
        return null;
    }
};

export const discountStockFirebase = (cart) => {

};

export const getOrderByIdFirebase = (id) => {
    try {
        const orderRef = collection(db, "orders", id)
        const order = getDoc(orderRef)
            .then((doc) => {
                if (doc.exists()) {
                    return { id: doc.id, ...doc.data() };
                } else {
                    console.error("No such document!");
                    return null;
                }
            })
            .catch(err => { console.error(err); return null; });
        console.log('Order fetched:', order);
    } catch (error) {
        return error;
    }
};