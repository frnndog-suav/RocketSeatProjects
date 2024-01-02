import styled from "styled-components";

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  width: fit-content;
  border-bottom: 1px solid transparent;
  border-radius: none;
  text-decoration: none;
  padding-top: 10px;
  padding-bottom: 10px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    height: 1rem !important;
    width: 2rem !important;
  }

  span {
    color: ${(props) => props.theme.blue};
    font-weight: bold;
    font-size: 0.75rem;
    margin-right: 0.6rem;
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
    cursor: pointer;
  }
`;
