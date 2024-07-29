import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"


const ItemDetail = ({producto}) => {
  return (
    <div className='detail'>
    <img src={producto.imagen} alt="" />
    <ul className='detalles'>
      <li>
      <h2>{producto.nombre} </h2>
      </li>
      <li><p>{producto.descripcion} </p></li>
      <li><ItemCount/></li>
    </ul>
    
    
    

 </div>
  )
}

export default ItemDetail