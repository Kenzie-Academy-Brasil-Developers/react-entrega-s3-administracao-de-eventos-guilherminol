import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import ProductsContainer from "../../components/ProductsContainer";
const Confraternizacao = () => {
  const { cart } = useContext(CartContext);
  const confraternizacaoProducts = cart.confraternizacao;
  return (
    <>
      {confraternizacaoProducts !== [] ? (
        <ProductsContainer
          page="confraternizacao"
          products={confraternizacaoProducts}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default Confraternizacao;
