import React, { useEffect, useState } from 'react'
import { getProductById } from '../../mock/AsyncService';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../service/Firebase';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const producRef = doc(db, 'products', id);
        getDoc(producRef)
            .then((doc) => {
                if (doc.exists()) {
                    setDetail({ id: doc.id, ...doc.data() });
                } else {
                    console.error("No such document!");
                }
            })
            .catch(err => { console.error(err) })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const updateStock = (quantity) => {
        setDetail(prevDetail => ({
            ...prevDetail,
            stock: prevDetail.stock
        }));
    };

    return (
        <div>
            {loading ? (<Loader />) :
                (<ItemDetail detail={detail} updateStock={updateStock} />)
            }
        </div>
    )
}

export default ItemDetailContainer