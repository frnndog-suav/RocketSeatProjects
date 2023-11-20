import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 104px;
  background-color: ${(props) => props.theme.background};
  padding: 2rem 10rem;
  justify-content: space-between;
  position: fixed;
  width: 100%;

  & img {
    height: 2.5rem;
    width: 5.3rem;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const PlaceBadge = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme["purple-light"]};
  border-radius: 6px;
  padding: 0.5rem;
  height: 2.375rem;
  color: ${(props) => props.theme["purple-dark"]};
  gap: 0.25rem;

  & span {
    font-size: 0.875rem;
    line-height: 130%;
  }
`;
