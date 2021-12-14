import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from './Context/CartContext'

const Cart = ({name, price, stock, id}) => {

    const {removeAllItem} = useContext(CartContext)

    return (
        <div>
            
        </div>
    )
}

export default Cart