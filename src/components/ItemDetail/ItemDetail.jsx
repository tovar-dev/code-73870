import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'

export const ItemDetail = ({ detail, updateStock }) => {
    const { addItem, itemQuantity } = useContext(CartContext);
    const [addedNewItem, setAddedNewItem] = useState(false);

    const onAdd = (quantity) => {
        const response = addItem({ ...detail, quantity });
        if (response.code === 200) {
            Swal.fire({
                title: "Producto agregado al carrito con éxito",
                icon: "success",
                confirmButtonColor: "#C6452A",
                draggable: true,
                timer: 2000
            });
            setAddedNewItem(true);
            updateStock(quantity);
        }
    };

    const availableStock = detail.stock - itemQuantity(detail.id);

    return (
        <div key={detail.id} className='item-detail'>
            <img src={detail.image} alt={detail.title} className='item-detail-img' />
            <div>
                <h2>{detail.name}</h2>
                <p>Descripción: {detail.description}</p>
                <p>Stock: {availableStock > 0 ? availableStock : 'No hay stock disponible'}</p>
                {detail.price_offer ? (
                    <div className='item-discount'>
                        <p className='color-discount'>Offer Price: ${detail.price_offer}</p>
                        <p>Price: ${detail.price}</p>
                    </div>
                ) : (
                    <p>Price: ${detail.price}</p>)
                }

                <ItemCount stock={availableStock} onAdd={onAdd} addedNewItem={addedNewItem} />
            </div>
        </div>
    )
}