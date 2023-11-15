import { styled } from "styled-components";

export const ShoppingCartButtonContainer = styled.button`
  display: flex;
  border-radius: 6px;
  border: none;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme["base-card"]};
  cursor: pointer;
  transition: background 0.1s;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
