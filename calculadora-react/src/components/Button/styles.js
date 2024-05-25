import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 100%;
  background-color: #00f241;
  color: #000;
  font-weight: 700;
  font-size: 28px;
  padding: 40px;
  border: none;
  border: #99ff99 0.01px solid;
  transition: 0.1s;

  &:hover {
    background-color: #005900;
    cursor: pointer;
    color: #fff;
    transition: 0.1s;
  }
`;
