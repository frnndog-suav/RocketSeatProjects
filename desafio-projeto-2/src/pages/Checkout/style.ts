import { styled } from "styled-components";

export const CheckoutContainer = styled.main`
  padding: 7rem 0px;
`;

export const CheckoutContent = styled.div`
  display: flex;
  gap: 2rem;
  padding: 4.875rem 10rem;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

export const EmptyShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme["base-label"]};
`;
