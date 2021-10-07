import styled from "styled-components";

export const Card = styled.li`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #323232;
  margin: 10px;
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  img {
    width: 100px;
    height: 300px;
  }
  div p {
    margin-top: 0;
    font-size: 16px;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;
