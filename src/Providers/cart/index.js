import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    formatura: [],
    casamento: [],
    confraternizacao: [],
  });

  const addProduct = (product, key) => {
    setCart({
      ...cart,
      key: [cart[key], product],
    });
  };

  const removeProduct = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart([newCart]);
  };

  return (
    <CartContext.Provider value={{ addProduct, removeProduct, cart }}>
      {children}
    </CartContext.Provider>
  );
};
