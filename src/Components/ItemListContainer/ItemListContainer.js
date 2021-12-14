import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { items } from "../../utils/Items";
import Item from "./Item/Item";
import ItemList from "./ItemList/ItemList";
import "./itemListContainer.scss";


export default function ItemListContainer() {
  const { categoryId } = useParams();
  // useEffect(() => {
  //       setFilter(categoryId)
  // }, [categoryId]);

  const filterItems = () => {
    return categoryId ? itemsList.filter ((item) => item.categoryId === categoryId) : itemsList
  }


  useEffect(() => {
    // "pido lista de items"
    getItemsList();
  }, []);

  const getItemsList = () => {
    fetchItemList.then((itemList) => setItemsList(itemList));
  };

  let fetchItemList = new Promise((resolve, reject) => {
    setTimeout(() => resolve(items), 2000);
  });

  const [itemsList, setItemsList] = useState([]);
  // const [filter, setFilter] = useState()

  return (
    <div className="item-list-component">
      <ItemList itemsList={filterItems()} />
    </div>
  );
}
