import './ItemListContainer.css';
 // import obtenerProductos from   "../../data/data.js";
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { getDocs, collection, query, where } from 'firebase/firestore';
import db from '../../db/db.js';


const ItemListContainer = ({saludo}) => {

 const [productos, setProductos]= useState([]);
 const [estaCargando, setEstaCargando]=  useState (false)
 const {idCategoria} = useParams();

const getProducts = async() => {

    try{
    const productosRef = collection(db, "productos")
    const dataDb = await getDocs(productosRef)
    const data = dataDb.docs.map((productDb)=> { 
        return { id: productDb.id, ...productDb.data() }} )
        setProductos(data)   }
catch(error){}
}

 const getProductsByCategory = async ()=> { 

    try{
        const productosRef = collection (db, "productos")
        const q = query (productosRef,where ("categoria","==", idCategoria))
        const dataDb = await getDocs(q)
        const data = dataDb.docs.map((productDb)=> { 
            return { id: productDb.id, ...productDb.data() }} )
    
            setProductos(data)
    }
catch(error){}
        
 }

    useEffect (() => {
        if (idCategoria){ getProductsByCategory()}
        else{ getProducts()}


       /* setEstaCargando (true)

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
    .finally(() => { setEstaCargando(false)

    }) */
    },[idCategoria]);


    return (
    <div className='catalogo'>
        { estaCargando? ( <div> <FadeLoader color="rgba(143, 48, 48, 1)" /></div>) :<ItemList productos={productos} />}
        
     
    </div>
     );
  }

export default ItemListContainer