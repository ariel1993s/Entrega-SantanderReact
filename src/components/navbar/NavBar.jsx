
import './NavBar.css';
import CartWidget from '../card/CartWidget';
import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand"><img src="https://th.bing.com/th/id/OIP.TNKLJsHHrGZ5WQX4It7GzAHaEe?w=276&h=180&c=7&r=0&o=5&pid=1.7"  width={80}/> </Link>
   
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        
         
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/categoria/remeras" className="nav-link">Remeras</Link>
        <Link to="/categoria/buzos" className="nav-link">Buzos</Link>
        <Link to="/categoria/pantalones" className="nav-link">Pantalones</Link>
        
      </div>
    </div>
  </div>
  <CartWidget />
</nav>
  
  );
}




export default NavBar


