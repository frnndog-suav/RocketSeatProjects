import { styled } from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  gap: 0.25rem;
  width: fit-content;
  height: 32px;

  & input {
    text-align: center;
    background-color: transparent;
    border: none;
    width: 1.25rem;
    font-size: 1rem;
    line-height: 130%;
    border: none;
    outline: none;
    cursor: default;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  & button {
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }

  & button:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
