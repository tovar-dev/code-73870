import React from 'react'
import { useState } from 'react'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count+1);
        }
    };

    const handleRemove = () => {
        if (count > 0) {
            setCount(count-1);
        }
    };

    return (
        <div>
            <button onClick={handleAdd}>+</button>
            <span>{count}</span>
            <button onClick={handleRemove}>-</button>
            <button disabled={count === 0} onClick={() => onAdd(count)}>Comprar</button>
        </div>
    )
}

export default ItemCount