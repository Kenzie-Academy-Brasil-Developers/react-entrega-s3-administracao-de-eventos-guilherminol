import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const ProductsListContext = createContext([]);

export const ProductsListProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);

  const getProductsList = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setProductsList(response.data));
  };
  useEffect(() => {
    getProductsList();
  }, []);
  return (
    <ProductsListContext.Provider value={{ productsList, getProductsList }}>
      {children}
    </ProductsListContext.Provider>
  );
};
