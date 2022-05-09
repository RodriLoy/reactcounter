import styled from "styled-components";

export const ContainerCounter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Display = styled.p`
  font-weight: bold;
  font-size: 40px;
  align-self: center;
`;

export const Number = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;

`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Increase = styled.button`
  align-self: center;
  background-color: green;
  border-radius: 30px;
  border: none;
  color: #fafafa;
  cursor: pointer;
  margin-top: 0.1rem;
  outline: none;
  padding: 10px 10px;
`;

export const Decrease = styled.button`
  align-self: center;
  background-color: red;
  border-radius: 30px;
  border: none;
  color: #fafafa;
  cursor: pointer;
  margin-top: 0.1rem;
  outline: none;
  padding: 10px 10px;
`;
