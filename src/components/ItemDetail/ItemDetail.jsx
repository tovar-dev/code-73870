import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const ItemDetail = ({ detail, updateStock }) => {
    const { addItem } = useContext(CartContext);
    const [addedNewItem, setAddedNewItem] = useState(false);

    const onAdd = (quantity) => {
        const response = addItem({ ...detail, quantity });
        console.log(response);
        if (response.code === 200) {
            setAddedNewItem(true);
            updateStock(quantity);
        }
    };

    return (
        <div key={detail.id} className='item-detail'>
            <img src={detail.image} alt={detail.title} className='item-detail-img' />
            <div>
                <h2>{detail.name}</h2>
                <p>Descripción: {detail.description}</p>
                <p>Stock: {detail.stock}</p>
                {detail.price_offer ? (
                    <div className='item-discount'>
                        <p className='color-discount'>Offer Price: ${detail.price_offer}</p>
                        <p>Price: ${detail.price}</p>
                    </div>
                ) : (
                    <p>Price: ${detail.price}</p>)
                }

                <ItemCount stock={detail.stock} onAdd={onAdd} addedNewItem={addedNewItem} />
            </div>
        </div>
    )
}