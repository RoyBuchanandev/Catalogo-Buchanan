import React from "react";
import Item from "../Item/Item";

export default function ItemList({ itemsList }) {
  return (
    <div className="item-list-container">
      {itemsList.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}
