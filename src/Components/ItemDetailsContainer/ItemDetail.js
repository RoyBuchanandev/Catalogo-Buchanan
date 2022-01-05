import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";

const ItemDetail = () => {
  const { cart, removeAllItem, removeItem, totalPrice } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container my-5">
        <h2>Ningun item agregado</h2>
        <hr />
        <Link to="/" className="btn btn-primary">
          Volver
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2>Carrito de compras</h2>
      <hr />
      <section></section>
      <hr />
      <h3>precio: $ {totalPrice()}</h3>
      <div>
        <button className="btn btn-danger" onClick={removeAllItem}>
          Vaciar carrito <BsFillTrashFill />
        </button>

        <Link to="/Checkout" className="btn btn-success mx-2">
          Terminar mi compra
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
