import { styled } from "styled-components";

export const Title = styled.span`
  font-size: 1.125rem !important;
  line-height: 130% !important;
  font-weight: 600 !important;
  padding: 0px !important;
  font-family: "Baloo 2", sans-serif;
`;

export const ItemsReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const Divider = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
`;

export const ItemsContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-top-right-radius: 44px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 44px;
  padding: 2.5rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  & img {
    width: 4rem !important;
    height: 4rem !important;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const ItemContentActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ItemTexts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & p {
    font-size: 1rem;
    line-height: 130%;
  }

  & span {
    font-size: 1rem;
    line-height: 130%;
    font-weight: 600;
  }
`;

export const ItemsTotalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ItemsTotalsContainerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & p {
    font-size: 1rem;
    line-height: 130%;
  }

  & span {
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 600;
  }
`;
