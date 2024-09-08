import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({producto}) => {
  const{ agregarProducto } = useContext(CartContext)
  const [mostarItemCount, setMostrarItemCount] = useState(true)

  const agregarAlCarrito = (contador) => { 
    const productoCarrito = { ...producto, cantidad: contador };

    agregarProducto(productoCarrito)

    setMostrarItemCount(false)
   };

  return (
    <div className='detail'>
    <img src={producto.imagen} alt="" />
    <ul className='detalles'>
      <li>
      <h2>{producto.nombre} </h2>
      </li>
      <li><p>{producto.descripcion} </p></li>
      { mostarItemCount ? (<li><ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito}/></li>
    ): (
    <Link to="/cart"> Ir al carrito</Link>) 
    }  
    </ul>
    
    
    

 </div>
  );
};

export default ItemDetail