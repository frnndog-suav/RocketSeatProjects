import { CreditCard, Icon } from "@phosphor-icons/react";
import { FC } from "react";
import { PaymentMethod } from "../../constants/types";
import {
  PaymentMethodOptionCheckedContainer,
  PaymentMethodOptionContainer,
} from "./styles";

interface PaymentMethodOptionProps {
  paymentMethod: PaymentMethod;
  icon: Icon;
  isChecked?: boolean;
}

export const PaymentMethodOption: FC<PaymentMethodOptionProps> = ({
  paymentMethod,
  icon: Icon,
  isChecked = false,
}) => {
  if (isChecked) {
    return (
      <PaymentMethodOptionCheckedContainer>
        <div>
          <Icon size={32} />
          <input
            type="radio"
            id={paymentMethod}
            name="método de pagamento"
            value={paymentMethod}
          />
          <label htmlFor={paymentMethod}>{paymentMethod}</label>
        </div>
      </PaymentMethodOptionCheckedContainer>
    );
  }

  return (
    <PaymentMethodOptionContainer>
      <div>
        <CreditCard size={32} />
        <input
          type="radio"
          id={paymentMethod}
          name="método de pagamento"
          value={paymentMethod}
        />
        <label htmlFor={paymentMethod}>{paymentMethod}</label>
      </div>
    </PaymentMethodOptionContainer>
  );
};
