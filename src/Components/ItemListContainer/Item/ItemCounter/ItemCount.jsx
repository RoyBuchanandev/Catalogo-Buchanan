import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import "./ItemCount.scss";
import { Link } from 'react-router-dom'

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);


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
        <Link to='/Cart' className='btn btn-outline-danger mt-3 mb-2' onClick={onAdd}><strong>Agregar al carrito: {count} unidad/es</strong></Link><br />

      </div>

      <br />

    </div>
  );

};


export default ItemCount;
