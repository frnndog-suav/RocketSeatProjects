import styled from "styled-components";

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  a {
    color: ${(props) => props.theme.blue};
    font-weight: bold;
    font-size: 1rem;
    line-height: 160%;
    margin-right: 0.6rem;
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
    cursor: pointer;
  }
`;
