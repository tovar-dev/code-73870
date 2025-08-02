import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

export const ItemDetail = ({ detail }) => {

    const onAdd = (quantity) => {
        console.log(`Added ${quantity} of ${detail.name} to cart`);
    };

    return (
        <div key={detail.id} className='item-detail'>
            <h2>{detail.name}</h2>
            <img src={detail.image} alt={detail.title} />
            <p>Descripción: {detail.description}</p>
            <p>Stock: {detail.stock}</p>
            {detail.price_offer ? (
                <div className='item-discount'>
                    <p>Offer Price: ${detail.price_offer}</p>
                    <p>Price: ${detail.price}</p>
                </div>
            ) : (
                <p>Price: ${detail.price}</p>)
            }
            <ItemCount stock={detail.stock} onAdd={onAdd}/>
        </div>
    )
}