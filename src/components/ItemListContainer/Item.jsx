import React, { useState } from 'react'
import './ItemListContainer.css';
import { Link } from 'react-router-dom';

const Item = ({producto} ) => {
const [expandir, setExpandir]= useState (false)

const handleMouseOver = () => {
setExpandir(true)
}
const handleMouseLeave = () => {
  setExpandir(false)
}

const estilocard = { 
  transform: expandir ? 'scale (1.1)' : 'scale(1)',
  transition:'transform 0.3s ease-in-out',

}


  return (
    <div
     onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={ estilocard}
       className={expandir ? "productoExpandido" : "producto" }>
              <Link to ={"/detalle/" + producto.id } >
                  <h3>{producto.nombre}</h3>
                   <img width={100}  src={producto.imagen} alt="" />
                  <p>categoria: {producto.categoria}</p>
                  <p className="precioProducto">Precio:$ {producto.precio}</p>
               </Link>
     </div>
  )
}

export default Item 