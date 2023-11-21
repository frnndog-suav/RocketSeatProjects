import { styled } from "styled-components";

export const InputContainer = styled.input`
  background-color: ${(props) => props.theme["base-input"]};
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 0.875rem;  
  line-height: 130%;
  color: ${(props) => props.theme["base-label"]};
  outline: none;
  border: 1px solid ${props => props.theme["base-button"]};
  width: inherit;

  &:focus {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }
`;
