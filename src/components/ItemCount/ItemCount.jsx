import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './ItemCount.css';

const ItemCount = ({ stock, onAdd, addedNewItem }) => {
    const [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleRemove = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const addCount = () => {
        setCount(0);
        console.log(`Cantidad agregada: ${count}`);
        onAdd(count)
    };

    useEffect(() => {
        if (addedNewItem) {
            setCount(0);
        }
    }, [addedNewItem]);

    return (
        <div className='counter-container'>
            <div>
                <button onClick={handleAdd} className='btn-secondary'>+</button>
                <span>{count}</span>
                <button onClick={handleRemove} className='btn-secondary'>-</button>
                <button
                    disabled={count === 0}
                    onClick={addCount}
                    className={!addedNewItem ? 'btn-primary' : 'btn-secondary'}>
                    Comprar
                </button>
            </div>
            <div className={`counter-section-added${addedNewItem ? ' visible' : ''}`}>
                <Link to="/cart" className='btn-primary cursor-pointer'>
                    Ir al carrito
                </Link>
                <Link to="/" className='btn-secondary'>
                    Seguir comprando
                </Link>
            </div>
        </div>
    )
}

export default ItemCount