import React from 'react'
import Item from '../ItemListContainer/Item/Item'
import ItemCount from '../ItemListContainer/Item/ItemCounter/ItemCount'
import {useContext} from 'react'
import { CartContext } from '../Context/CartContext'





const ItemDetail = ({item ,name, price, quantity, id}) => {
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

    )
}
export default ItemDetail;

    

