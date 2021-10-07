import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    formatura: [],
    casamento: [],
    confraternizacao: [],
  });

  const addProduct = (product, key) => {
    if (key === "casamento") {
      return setCart({
        ...cart,
        casamento: [...cart.casamento, product],
      });
    }
    if (key === "formatura") {
      return setCart({
        ...cart,
        formatura: [...cart.formatura, product],
      });
    }
    return setCart({
      ...cart,
      confraternizacao: [...cart.confraternizacao, product],
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
