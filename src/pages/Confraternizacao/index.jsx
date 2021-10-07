import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import ProductsContainer from "../../components/ProductsContainer";
const Confraternizacao = () => {
  const { cart } = useContext(CartContext);
  const confraternizacaoProducts = cart.confraternizacao;
  return (
    <>
      {confraternizacaoProducts !== [] ? (
        <ProductsContainer products={confraternizacaoProducts} />
      ) : (
        ""
      )}
    </>
  );
};
export default Confraternizacao;
