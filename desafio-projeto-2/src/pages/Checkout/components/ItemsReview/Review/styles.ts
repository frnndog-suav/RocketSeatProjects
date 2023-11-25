import { styled } from "styled-components";

export const Divider = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
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

export const ItemContentActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
