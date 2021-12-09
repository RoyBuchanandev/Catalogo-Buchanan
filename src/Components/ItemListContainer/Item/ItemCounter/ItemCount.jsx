import React, { useState,useContext } from 'react';
import Button from '@material-ui/core/Button';
import "./ItemCount.scss";
import { Link } from 'react-router-dom'
import CartContext from '../../../Context/CartContext';
import Cart from '../../../Cart';

const ItemCount = ({ initial, stock, handleOnAdd }) => {
  const [count, setCount] = useState(initial);
  const {cart, setCart} = useContext(CartContext)

  const handleOnClick = () => {
    handleOnAdd (count)
  }
  

  const handleOp = (simbolo) => {
    simbolo === '-' ? count > 1 && setCount(count - 1) : count < stock && setCount(count + 1);
  };

  return (
    <div className="item-count-container">
      <div className="op-buttons-container">
        <Button variant="outlined" className="op-button" onClick={() => handleOp('-')}> - </Button>
        <span>{count}</span>
        <Button variant="outlined" className="op-button" onClick={() => handleOp('+')}> + </Button>
        <br />
      </div>

      <div>
        <Button  className='btn btn-outline-danger mt-3 mb-2' onClick={handleOnClick}><strong>Agregar al carrito: {count} unidad/es</strong></Button><br />

      </div>

<span> {JSON.stringify (cart,null,4)} </span>
      <br />

    </div>
  );

};


export default ItemCount;
