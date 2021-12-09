import { createContext, useState } from "react";
import { items } from "../../utils/Items";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
     setCart ([...cart, {...item,quantity:quantity}])
    }
  };

  return (
    <div>
      <CartContext.Provider value={{cart, addItem }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartContext;
