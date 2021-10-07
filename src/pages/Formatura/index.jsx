import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import ProductsContainer from "../../components/ProductsContainer";
const Formatura = () => {
  const { cart } = useContext(CartContext);
  const formaturaProducts = cart.formatura;
  return (
    <>
      <ProductsContainer products={formaturaProducts} />
    </>
  );
};
export default Formatura;
