import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 0.875rem;
  line-height: 160%;  
  font-weight: 700;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  width: 132px;
  height: 46px;
  cursor: pointer;
  transition: background 0.1s;

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
