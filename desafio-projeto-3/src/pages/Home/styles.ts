import styled from "styled-components";

export const HomePageContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export const HomePageContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -5rem;
  padding-left: 18rem;
  padding-right: 18rem;
`;

export const CardsListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 3rem;
`;
