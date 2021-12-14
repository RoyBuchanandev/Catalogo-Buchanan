import React, { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "../Context/CartContext";

export const CartItem = ({ name, price, quantity, id, totalPrice }) => {
  const { removeAllItem, removeItem } = useContext(CartContext);

  return (
    <div>
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
      <p>id: {id}</p>

      <button className="btn btn-danger" onClick={removeItem}>
        remover un item{" "}
      </button>
    </div>
  );
};
