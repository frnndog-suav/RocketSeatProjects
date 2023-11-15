import styled from "styled-components";

export const RemoveItemButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  line-height: 160%;
  border-radius: 6px;
  border: none;
  height: 32px;
  padding: 0 0.5rem;
  gap: 0.25rem;
  background-color: ${(props) => props.theme["base-button"]};
  cursor: pointer;
  transition: background 0.1s;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;
