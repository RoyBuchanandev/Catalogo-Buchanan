import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { database } from "../../Firebase/Config";
import { doc, getDoc } from "firebase/firestore/lite";

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const docRef = doc(database, "productos");
    getDoc(docRef);
    console
      .log(doc)

      .then((doc) => {
        setItem({
          id: doc.id,
          ...doc.data(),
        });
      });
  }, []);

  return <div>{item && <ItemDetail item={item} />}</div>;
}
