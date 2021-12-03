import React from 'react'
import { items } from '../../utils/Items'
import Item from '../ItemListContainer/Item/Item'

export default function ItemDetail({item}) {
    return  ( 
        <div>
        <Item item= {item} />
        </div>
    )}
    

