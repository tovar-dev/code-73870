import React, { useEffect, useState } from 'react'
import { getProductById } from '../../mock/AsyncService';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        getProductById(id)
            .then(response => { setDetail(response) })
            .catch(err => { console.error(err) })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return (
        <div>
            {loading ? (<p>Loading...</p>) :
                (<ItemDetail detail={detail} />)
            }
        </div>
    )
}

export default ItemDetailContainer