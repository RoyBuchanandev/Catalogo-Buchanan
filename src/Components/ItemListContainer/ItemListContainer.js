import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { items } from "../../utils/Items";
import ItemList from "./ItemList/ItemList";
import "./itemListContainer.scss";
import { collection, getDocs } from "firebase/firestore/lite";
import { database } from "../../Firebase/Config";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  // useEffect(() => {
  //       setFilter(categoryId)
  // }, [categoryId]);

  const filterItems = () => {
    return categoryId
      ? itemsList.filter((item) => item.categoryId === categoryId)
      : itemsList;
  };

  useEffect(() => {
    const productosRef = collection(database, "productos");
    getDocs(productosRef).then((resp) => {
      const itemsResp = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log(itemsResp);
      setItemsList(items);
    });
  }, []);

  const [itemsList, setItemsList] = useState([]);
  // const [filter, setFilter] = useState()

  return (
    <div className="item-list-component">
      <ItemList itemsList={filterItems()} />
    </div>
  );
}
