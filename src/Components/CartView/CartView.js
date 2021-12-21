import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { CartItem } from './CartItem'
import { BsFillTrashFill } from 'react-icons/bs'

export const CartView = () => {

    const {cart, removeAllItem,removeItem, totalPrice} = useContext(CartContext)


    if (cart.length === 0) {
        return <div className="container my-5">
                    <h2>Ningun item agregado</h2>
                    <hr/>
                    <Link to="/" className="btn btn-primary">Volver</Link>
                </div>
    }


    return (
        <div className="container my-5">
            <h2>Carrito de compras</h2>
            <hr/>
            <section>
                {
                    cart.map((prod) => <CartItem key={prod.id} {...prod}/>)
                }
            </section>
            <hr/>
            <h3>precio: $ {totalPrice()}</h3>
            <div>
                
                <button className="btn btn-danger" onClick={removeAllItem}>Vaciar carrito <BsFillTrashFill/></button>
                
                <Link to = "/Checkout" className="btn btn-success mx-2">Terminar mi compra</Link>
                
            </div>
        </div>
    )
}

