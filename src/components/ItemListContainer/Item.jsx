import React from 'react'
import './ItemListContainer.css';
import { Link } from 'react-router-dom';

const Item = ({producto} ) => {
  return (
    <div className='producto'>
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