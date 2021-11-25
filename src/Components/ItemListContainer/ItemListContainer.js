import React, {useEffect, useState} from "react";
import {items} from "../../utils/Items"
import ItemList from "./ItemList/ItemList";
import './itemListContainer.scss'

export default function ItemListContainer() {
  

  useEffect(() => {
    // "pido lista de items"
    getItemsList();
  }, []);

  const getItemsList = () => {
    fetchItemList.then((itemList) => setItemsList (itemList));
  };

  let fetchItemList = new Promise((resolve, reject) => {
    setTimeout(() => resolve(items), 2000);
  });

  const [itemsList, setItemsList] = useState([])

  return <div className = "item-list-component">
      <ItemList itemsList ={itemsList}/>
  </div>;

}
