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

  const removeProduct = (key, product) => {
    console.log("a");
    if (key === "casamento") {
      return setCart({
        ...cart,
        casamento: cart.casamento.filter((item) => item.id !== product.id),
      });
    }
    if (key === "formatura") {
      return setCart({
        ...cart,
        formatura: cart.formatura.filter((item) => item.id !== product.id),
      });
    }
    if (key === "confraternizacao") {
      return setCart({
        ...cart,
        confraternizacao: cart.confraternizacao.filter(
          (item) => item.id !== product.id
        ),
      });
    }
  };

  return (
    <CartContext.Provider value={{ addProduct, removeProduct, cart }}>
      {children}
    </CartContext.Provider>
  );
};
