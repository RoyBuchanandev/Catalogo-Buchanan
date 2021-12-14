import React from 'react'
import Item from '../ItemListContainer/Item/Item'
import ItemCount from '../ItemListContainer/Item/ItemCounter/ItemCount'
import {useContext} from 'react'
import CartContext  from '../Context/CartContext'





const ItemDetail = ({item}) => {
    
    

    return (
        <div>
            <Item item={item}/>
            

        </div>

    )
}
export default ItemDetail;

    

