import { styled } from "styled-components";

export const Title = styled.span`
  font-size: 1.125rem !important;
  line-height: 130% !important;
  font-weight: 600 !important;
  padding: 0px !important;
  font-family: "Baloo 2", sans-serif;
`;

export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 0.9375rem;
`;

export const FormContent = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-input"]};
  border-radius: 6px;
`;

export const FormContentMessage = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme["yellow-dark"]};
`;

const MessageLine = styled.p`
  color: ${(props) => props.theme["base-text"]};
  line-height: 130%;
`;

export const FirstLineMessage = styled(MessageLine)`
  font-size: 1rem;
`;

export const SecondLineMessage = styled(MessageLine)`
  font-size: 0.875rem;
`;
