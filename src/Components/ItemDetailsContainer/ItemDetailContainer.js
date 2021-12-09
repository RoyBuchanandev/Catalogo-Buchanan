import React, { useState, useEffect } from "react";
import { items } from "../../utils/Items";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../Context/CartContext";

export default function ItemDetailContainer({ id }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItemById(id);
  }, []); // dependencia

  const fetchItemById = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(items.find((item) => item.id == id)), 2000);
    });
  };

  const getItemById = (id) => {
    fetchItemById(id).then((item) => setItem(item));
  };

  return <div>{item && <ItemDetail item={item} />}</div>;
}
