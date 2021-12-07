import React from 'react'
import { items } from '../../utils/Items'
import Item from '../ItemListContainer/Item/Item'
import ItemCount from '../ItemListContainer/Item/ItemCounter/ItemCount'




export default function ItemDetail({ item, onAdd }) {
  

    return (
        <div>
            <ItemCount onAdd ={onAdd}/>
            <Item item={item} />
        </div>

    )
}


//1- agregar el item count dentro del itemDetail (hecho)
//2-  pasarle por props al itemCount el onADD que ya estaba de desafios anteriores (hecho) 
//3- cuando se le hace click a onAdd tiene que navegar a '/Cart'
// que por el momento es un componente vacio
    

