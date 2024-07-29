import './ItemListContainer.css';
import obtenerProductos from   "../../data/data.js";
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({saludo}) => {

 const [productos, setProductos]= useState([]);
 const {idCategoria} = useParams();

    useEffect (() => {
    obtenerProductos()
    .then((respuesta)=> {
            if (idCategoria) {
            const productosFiltrados = respuesta.filter ( (producto)=> producto.categoria === idCategoria )
            setProductos (productosFiltrados)
            }else {
                setProductos(respuesta);
            }


        
    })
    .catch ((error) => {
         console.log (error);
        })
    .finally(() => { console.log ("finalizo la promesa");

    })
    },[idCategoria]);


    return (
    <div className='catalogo'>
        <ItemList productos={productos} />
     
    </div>
     );
  }

export default ItemListContainer