import styled from "styled-components";
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
export const Button = styled.button`
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  &:hover {
    transition: 0.3s;
    background-color: #fff;
    color: #323232;
  }
`;
