import React, { useContext } from "react";
import { Card, Button } from "@material-ui/core";
import ItemCount from "./ItemCounter/ItemCount";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { BsFillTrashFill } from "react-icons/bs";

export default function Item({ item }) {
  const { cart, addItem, removeAllItem, removeItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    debugger;
    console.log(cart);
    addItem(item, quantity);
  };

  return (
    <Card className="item-card-container">
      <div className="item-card-header">
        <span>{item.name}</span>
      </div>
      <div className="item-card-body">
        <div className={"item-photo"}>
          <img src={item.img} className="center" />
        </div>

        <span>$ {item.price}</span>
        <NavLink to={`/item/${item.id}`}>
        <Button variant={"outlined"} className="item-button">
          
          Ver detalle del producto{" "}
        </Button>
        </NavLink>
        
        
        <span>stock disponible: {item.stock}</span>
        <ItemCount initial={1} stock={item.stock} handleOnAdd={handleOnAdd} />
        <th>
          
          
          <div>
          <NavLink to={`/CartView`}>
          <Button variant="contained" className='btn btn-outline-danger mt-3 mb-2' >
            <strong>Terminar mi compra</strong>
            </Button><br />
          </NavLink>
          </div>
        </th>
      </div>
    </Card>
  );
}
