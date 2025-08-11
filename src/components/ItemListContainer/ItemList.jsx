import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Item from './Item';

const ItemList = ({ props }) => {
  const { items } = props;

  return (
    items.map(item =>
      <Item key={item.id} item={item} />
    )
  )
}

export default ItemList