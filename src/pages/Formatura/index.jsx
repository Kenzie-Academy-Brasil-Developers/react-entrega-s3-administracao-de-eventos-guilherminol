import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import ProductsContainer from "../../components/ProductsContainer";
const Formatura = () => {
  const { cart } = useContext(CartContext);
  const formaturaProducts = cart.formatura;
  return (
    <>
      <ProductsContainer page="formatura" products={formaturaProducts} />
    </>
  );
};
export default Formatura;
