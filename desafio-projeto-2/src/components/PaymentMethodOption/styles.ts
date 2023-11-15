import styled from "styled-components";

const BasePaymentMethodContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  border-radius: 6px;
  height: 51px;

  & label {
    width: 100%;
    color: ${(props) => props.theme["base-text"]};
  }

  input[type="radio"] {
    display: none;
  }
`;

export const PaymentMethodOptionContainer = styled(BasePaymentMethodContainer)`
  cursor: pointer;
  background-color: ${(props) => props.theme["base-button"]};

  & label {
    cursor: pointer;
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;

export const PaymentMethodOptionCheckedContainer = styled(
  BasePaymentMethodContainer
)`
  background-color: ${(props) => props.theme["purple-light"]};
  border: 1px solid ${(props) => props.theme.purple};
`;
