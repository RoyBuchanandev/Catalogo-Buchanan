import React , {useContext} from "react";
import { Card, Button } from "@material-ui/core";
import ItemCount from "./ItemCounter/ItemCount";
import { NavLink } from "react-router-dom";
import CartContext from "../../Context/CartContext";

export default function Item({ item }) {

  const { cart, addItem, onDelete } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    debugger
    console.log(cart)
    addItem(item, quantity);
  };

  return (
    <Card className="item-card-container">
      <div className="item-card-header">
        <span>{item.name}</span>
      </div>
      <div className="item-card-body">
        <div className={"item-photo"}>
          <NavLink to={`/item/${item.id}`}>
            <img src={item.img} className="center" />
          </NavLink>
        </div>

        <span>$ {item.price}</span>
        <Button variant={"outlined"} className="item-button">
          {" "}
          Ver detalle del producto{" "}
        </Button>
        <span>stock disponible: {item.stock}</span>
        <ItemCount initial={1} stock={item.stock} handleOnAdd={handleOnAdd} />
      </div>
    </Card>
  );
}
