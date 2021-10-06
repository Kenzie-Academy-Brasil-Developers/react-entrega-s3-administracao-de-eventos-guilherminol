import { Button, ButtonsContainer } from "./style";
import { useContext } from "react";
const Buttons = () => {
  return (
    <ButtonsContainer>
      <Button onClick={() => {}}>Casamento</Button>
      <Button>Formatura</Button>
      <Button>Confraternização</Button>
    </ButtonsContainer>
  );
};
export default Buttons;
