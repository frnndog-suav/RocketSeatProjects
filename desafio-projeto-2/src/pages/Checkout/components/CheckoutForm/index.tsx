import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "@phosphor-icons/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { PaymentMethodOption } from "../../../../components/PaymentMethodOption";
import { PaymentMethod } from "../../../../constants/types";
import {
  CheckoutFormContainer,
  CheckoutFormInput,
  FirstLineMessage,
  FormContent,
  FormContentMessage,
  FormRow,
  PaymentMethodOptionSelection,
  SecondLineMessage,
  Title,
} from "./styles";

export function CheckoutForm() {
  const [isCreditSelected, setIsCreditSelected] = useState(false);
  const [isDebitSelected, setIsDebitSelected] = useState(false);
  const [isMoneySelected, setIsMoneySelected] = useState(false);

  const { register, setValue } = useFormContext();

  function selectOption(paymentMethod: PaymentMethod) {
    setValue("isPaymentMethodSelected", true);

    switch (paymentMethod) {
      case PaymentMethod.Credit:
        setIsCreditSelected(true);
        setIsDebitSelected(false);
        setIsMoneySelected(false);
        return;
      case PaymentMethod.Debit:
        setIsCreditSelected(false);
        setIsDebitSelected(true);
        setIsMoneySelected(false);
        return;
      default:
        setIsCreditSelected(false);
        setIsDebitSelected(false);
        setIsMoneySelected(true);
        return;
    }
  }

  return (
    <CheckoutFormContainer>
      <Title>Complete seu pedido</Title>
      <FormContent>
        <FormContentMessage iconcolor="yellow-dark">
          <MapPin size={"1.375rem"} />
          <div>
            <FirstLineMessage>{"Endereço de Entrega"}</FirstLineMessage>
            <SecondLineMessage>
              {"Informe o endereço onde deseja receber seu pedido"}
            </SecondLineMessage>
          </div>
        </FormContentMessage>

        <FormRow>
          <CheckoutFormInput
            width="30%"
            placeholder="CEP"
            {...register("postalCode")}
          />
        </FormRow>
        <FormRow>
          <CheckoutFormInput
            width="100%"
            placeholder="Rua"
            {...register("address")}
          />
        </FormRow>

        <FormRow>
          <CheckoutFormInput
            width="30%"
            placeholder="Número"
            {...register("addressNumber", { valueAsNumber: true })}
          />

          <CheckoutFormInput
            width="70%"
            placeholder="Complemento"
            {...register("addressAdditionalInfo")}
          />
        </FormRow>

        <FormRow>
          <CheckoutFormInput
            width="30%"
            placeholder="Bairro"
            {...register("neighborhood")}
          />

          <CheckoutFormInput
            width="57%"
            placeholder="Cidade"
            {...register("city")}
          />
          <CheckoutFormInput width="10%" placeholder="UF" {...register("uf")} />
        </FormRow>
      </FormContent>

      <FormContent>
        <FormContentMessage iconcolor="purple">
          <CurrencyDollar size={"1.375rem"} />
          <div>
            <FirstLineMessage>{"Pagamento"}</FirstLineMessage>
            <SecondLineMessage>
              {
                "O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              }
            </SecondLineMessage>
          </div>
        </FormContentMessage>

        <PaymentMethodOptionSelection>
          <PaymentMethodOption
            icon={CreditCard}
            paymentMethod={PaymentMethod.Credit}
            isChecked={isCreditSelected}
            selectOption={selectOption}
          />
          <PaymentMethodOption
            icon={Bank}
            paymentMethod={PaymentMethod.Debit}
            isChecked={isDebitSelected}
            selectOption={selectOption}
          />
          <PaymentMethodOption
            icon={Money}
            paymentMethod={PaymentMethod.Money}
            isChecked={isMoneySelected}
            selectOption={selectOption}
          />
        </PaymentMethodOptionSelection>
      </FormContent>
    </CheckoutFormContainer>
  );
}
