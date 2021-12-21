import React from "react";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useState } from "react";
import { validateNamespace } from "@firebase/util";
import { database } from "../../Firebase/Config";
import { collection, Timestamp, writeBatch, getDocs, query, where, documentId, addDoc, getDoc } from "firebase/firestore/lite";
import { FieldPath } from "firebase/firestore/lite";

export const Checkout = () => {
    const { cart, totalPrice, removeAllItem } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: "",
        email: "",
        teléfono: ""
    })

    const handleInputChange = (e) => {

        console.log(e.target)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        if (values.nombre.length < 2) {
            alert("nombre invalido")
            return
        }
        if (values.email.length < 6) {
            alert("email invalido")
            return
        }
        if (values.tel.length < 8) {
            alert("teléfono invalido")
            return
        }
        const order = {
            buyer: values,
            items: cart,
            total: totalPrice(),
            date: Timestamp.fromDate(new Date())
        };




        const batch = writeBatch(database)
        const ordersRef = collection(database, "orders")
        const productosRef = collection(database, "productos")
        const q = query(productosRef, where(documentId(), 'in', cart.map(el => el.id)))
        const productos =  getDocs (q)
        const outOfStock = []

        getDocs(q)
            .then((res) => {
                res.docs.forEach((doc) => {
                    const itemInCart = cart.find((prod) => prod.id === doc.id)

                    if (doc.data().stock >= itemInCart.cantidad) {
                        batch.update(doc.ref, {
                            stock: doc.data().stock - itemInCart.cantidad
                        })
                    } else {
                        outOfStock.push(itemInCart)
                    }

                })
                if (outOfStock.length === 0) {

                }
                batch.commit()
                addDoc(ordersRef)
                .then((res) => console.log (res.id))
            })



        addDoc(ordersRef, order)
            .then((res) => {
                setOrderId(res.id)
                removeAllItem()

            })

    };

    return (
        <div className="container my-5">


            {

                orderId
                    ?
                    <>
                        <h2> tu compra fue registrada con exito </h2>
                        <hr />
                        <p> tu número de orden es: {orderId}</p>

                    </>
                    : <>

                        <h2>checkout</h2>
                        <hr />

                        <form onSubmit={handleSubmit}>
                            <input
                                name="nombre"
                                onChange={handleInputChange}
                                value={values.nombre}
                                className="form-control my-2"
                                type="email"
                                placeholder="nombre "
                            />
                            <input
                                name="email"
                                onChange={handleInputChange}
                                value={values.email}
                                className="form-control my-2"
                                type="text"
                                placeholder="e-mail"
                            />
                            <input
                                name="tel"
                                onChange={handleInputChange}
                                value={values.tel}
                                className="form-control my-2"
                                type="tel"
                                placeholder="teléfono"
                            />
                            <Button onClick={handleSubmit}> enviar </Button>
                        </form>

                    </>

            }




        </div>
    );
};
