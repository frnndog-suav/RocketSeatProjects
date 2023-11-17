import { styled } from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 5rem;

  & span {
    font-family: "Baloo 2", sans-serif;
    line-height: 130%;
    font-size: 2rem;
    padding-bottom: 5rem;
    line-height: 130%;
    font-weight: 600;
  }
`;

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
`;
