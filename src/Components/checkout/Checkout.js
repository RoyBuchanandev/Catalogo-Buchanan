import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { database } from "../../Firebase/Config";
import { collection, Timestamp, addDoc } from "firebase/firestore/lite";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core";

export const Checkout = () => {
  const { cart, totalEarn, removeAllItem, totalPrice } =
    useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    tel: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.nombre.length < 1) {
      swal(" nombre invalido");
      return;
    }
    if (values.email.length < 4) {
      swal(" nombre invalido");
      return;
    }
    if (values.tel.length < 4) {
      swal(" nombre invalido");
      return;
    }

    const order = {
      buyer: values,
      items: cart,
      total: totalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    const ordersRef = collection(database, "orders");

    addDoc(ordersRef, order).then((res) => {
      setOrderId(res.id);
      removeAllItem();
    });
  };

  return (
    <div className="container my-5">
      {orderId ? (
        <>
          <Card>
            <h2> tu compra fue registrada</h2>
            <hr />
            <p> tu número de orden es: {orderId} </p>
            <Link to="/" className="btn btn-primary">
              {" "}
              volver{" "}
            </Link>
          </Card>
        </>
      ) : (
        <>
          <h2> CHECKOUT</h2>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              name="nombre"
              onChange={handleInputChange}
              value={values.nombre}
              className="form-control my-2"
              type="text"
              placeholder="nombre"
            />
            <input
              name="email"
              onChange={handleInputChange}
              value={values.email}
              className="form-control my-2"
              type="email"
              placeholder="email"
            />
            <input
              name="tel"
              onChange={handleInputChange}
              value={values.tel}
              className="form-control my-2"
              type="tel"
              placeholder="tel"
            />

            <Button type="submit" className="btn btn- success">
              {" "}
              enviar{" "}
            </Button>
          </form>
        </>
      )}
    </div>
  );
};
