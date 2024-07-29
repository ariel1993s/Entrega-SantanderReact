import React from 'react'
import Item from './Item'
import './ItemListContainer.css';

const ItemList = ({productos} ) => {
  return (
    <div className='catalogo'>   {
        productos.map((producto) => (
            <Item  key={producto.id} producto = {producto} />
        ))
        }</div>
  )
}

export default ItemList