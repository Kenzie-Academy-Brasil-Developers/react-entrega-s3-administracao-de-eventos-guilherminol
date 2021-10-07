import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import ProductsContainer from "../../components/ProductsContainer";
const Casamento = () => {
  const { cart } = useContext(CartContext);
  const casamentoProducts = cart.casamento;
  console.log(casamentoProducts);
  return (
    <>
      {casamentoProducts !== [] ? (
        <ProductsContainer page={"casamento"} products={casamentoProducts} />
      ) : (
        ""
      )}
    </>
  );
};
export default Casamento;
