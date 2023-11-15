import { FC } from "react";
import {
  PaymentMethodOptionCheckedContainer,
  PaymentMethodOptionContainer,
} from "./styles";

interface PaymentMethodOptionProps {
  isChecked?: boolean;
}

export const PaymentMethodOption: FC<PaymentMethodOptionProps> = ({
  isChecked = false,
}) => {
  if (isChecked) {
    return (
      <PaymentMethodOptionCheckedContainer>
        <div>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label htmlFor="html">CARTÃO DE CRÉDITO</label>
        </div>
      </PaymentMethodOptionCheckedContainer>
    );
  }

  return (
    <PaymentMethodOptionContainer>
      <div>
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label htmlFor="html">CARTÃO DE CRÉDITO</label>
      </div>
    </PaymentMethodOptionContainer>
  );
};
