import { useEffect, useState } from "react";
import { getProducts } from "../../mock/AsyncService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../service/Firebase";

const ItemListContainer = ({ title }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const { category } = useParams();

    useEffect(() => {
        setLoading(true);
        const productsFirebase = category
            ? query(collection(db, "products"), where("category", "==", category))
            : collection(db, 'products');
        getDocs(productsFirebase)
            .then((snapshot) => {
                const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setItems(products);
            })
            .catch(err => { console.error(err) })
            .finally(() => {
                setLoading(false);
            });
    }, [category]);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem', borderRadius: '0.5rem' }}>
            {loading ? (<Loader />) :
                <ItemList props={{ items }} />
            }
        </div>
    );
};

export default ItemListContainer;