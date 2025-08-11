import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ item }) => {
  return (
    <Link to={'/item/' + item.id} key={item.id} className="card-product">
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.title} style={{ height: '10rem', width: '10rem', borderRadius: '0.5rem' }} />
      <p>Price: ${item.price}</p>
    </Link>
  )
}

export default Item