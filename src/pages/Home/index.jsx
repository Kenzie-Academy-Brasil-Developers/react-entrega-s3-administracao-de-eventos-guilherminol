import ProductsContainer from "../../components/ProductsContainer";
import { useContext } from "react";
import { ProductsListContext } from "../../Providers/productsList";
const Home = () => {
  const { productsList } = useContext(ProductsListContext);
  console.log(productsList);
  return (
    <>
      {productsList && (
        <ProductsContainer shop={true} products={productsList} />
      )}
    </>
  );
};
export default Home;
