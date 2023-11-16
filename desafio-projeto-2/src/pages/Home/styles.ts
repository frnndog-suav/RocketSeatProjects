import { styled } from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const MenuContainer = styled.div`
  padding: 0px 13.5rem;
  background-color: red;

  & span {
    font-family: "Baloo 2", sans-serif;
    line-height: 130%;
    font-size: 2rem;
  }
`;
