import { createContext, useState } from "react";
import { items } from "../../utils/Items";
import Item from "../ItemListContainer/Item/Item";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
     setCart ([...cart, {...item,quantity:quantity}])
    }
  };

  const removeAllItem = () =>{
    setCart([])
}

const removeItem = (id) => {
  setCart( cart.filter(prod => prod.id !== id ) )
}

const totalEarn = () => {
  return cart.reduce((acc, prod) =>  prod.quantity, 0)
}

const totalPrice = () => {
  return cart.reduce((acc, prod) =>  prod.price * prod.quantity, 0)
}

  return (
    <div>
      <CartContext.Provider value={{cart, addItem, removeAllItem,removeItem,totalEarn, totalPrice }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};


