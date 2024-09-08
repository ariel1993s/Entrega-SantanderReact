import './CartWidget.css';
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const {cantidadTotal } = useContext(CartContext);

  let cantidad = cantidadTotal()

    return (
      <Link to="/cart" className="cart-widget">
        <FaShoppingCart size={25} color="black" style={ cantidad === 0 &&{ color: "gray" }}/>
        <p> {cantidad > 0 && cantidad } </p>
      </Link>
    );
  }

  export default CartWidget;