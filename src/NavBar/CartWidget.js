import React, { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../Components/Context/CartContext'

export const CartWidget = () => {

    const {cart, removeAllItem, totalEarn} = useContext(CartContext)
    const style = { color: "black", fontSize: "1.5em" }
    const styleSpan = { color: "black", fontSize: "1.2em" }
    return (
        <Link to="/cartView"  
            style={{
                visibility: cart.length === 0 ? 'hidden' : 'visible'
            }}
        >
            <span style={styleSpan}>{totalEarn()}</span>
            <FaCartPlus style={style} className="cartWidget"/>
            
        </Link>
    )
}


