import styled from "styled-components";

const BasePaymentMethodContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 1rem;
  width: 100%;

  & div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${(props) => props.theme.purple};

    & label {
      width: 100%;
      color: ${(props) => props.theme["base-text"]};
      font-size: 0.75rem;
    }
  }

  border-radius: 6px;
  height: 51px;

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
