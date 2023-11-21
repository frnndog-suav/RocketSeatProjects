import { styled } from "styled-components";
import { defaultTheme } from "../../../../styles/theme/default";

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
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
`;

interface FormContentMessageProps {
  iconcolor: keyof typeof defaultTheme;
}

export const FormContentMessage = styled.div<FormContentMessageProps>`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme[props.iconcolor]};
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

export const PostalCodeInput = styled.div`
  width: 65%;
`;

export const AddressInput = styled.div`
  width: 100%;
`;

export const AddressAdditionalInfoInput = styled.div`
  width: 100%;
`;

export const CityInput = styled.div`
  display: flex;
  width: 350%;
`;

export const UFInput = styled.div`
  display: flex;
  width: 100%;
`;

export const PaymentMethodOptionSelection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
