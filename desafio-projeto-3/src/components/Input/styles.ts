import styled from "styled-components";

export const InputContainer = styled.input`
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-border"]};
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.3rem;
  padding-right: 1.3rem;
  color: ${(props) => props.theme["base-label"]};
  border-radius: 6px;
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};

    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;
