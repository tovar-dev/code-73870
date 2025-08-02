import React from 'react'
import { Link, useParams } from 'react-router-dom';

const ItemList = ({ props }) => {
  const { items } = props;

  return (
    items.map(item =>
      <Link to={'/item/' + item.id} key={item.id}
        style={{ cursor: 'pointer', width: '30%', backgroundColor: '#f0f0f0', borderRadius: '0.5rem' }}
        className="item">
        <h2>{item.name}</h2>
        <img src={item.image} alt={item.title} style={{ height: '10rem', width: '10rem', borderRadius: '0.5rem' }} />
        <p>Price: ${item.price}</p>
      </Link>
    )
  )
}

export default ItemList