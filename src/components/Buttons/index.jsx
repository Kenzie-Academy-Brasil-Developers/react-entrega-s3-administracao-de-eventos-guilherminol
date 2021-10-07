import { Button, ButtonsContainer } from "./style";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
const Buttons = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  return (
    <ButtonsContainer>
      <Button
        onClick={() => {
          addProduct(product, "casamento");
        }}
      >
        Casamento
      </Button>
      <Button
        onClick={() => {
          addProduct(product, "formatura");
        }}
      >
        Formatura
      </Button>
      <Button
        onClick={() => {
          addProduct(product, "confraternizacao");
        }}
      >
        Confraternização
      </Button>
    </ButtonsContainer>
  );
};
export default Buttons;
