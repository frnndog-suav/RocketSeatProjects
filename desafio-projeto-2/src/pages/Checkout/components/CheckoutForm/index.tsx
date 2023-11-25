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
  AddressAdditionalInfoInput,
  AddressInput,
  CheckoutFormContainer,
  CheckoutFormInput,
  CityInput,
  FirstLineMessage,
  FormContent,
  FormContentMessage,
  FormRow,
  PaymentMethodOptionSelection,
  PostalCodeInput,
  SecondLineMessage,
  Title,
  UFInput,
} from "./styles";

export function CheckoutForm() {
  const [isCreditSelected, setIsCreditSelected] = useState(false);
  const [isDebitSelected, setIsDebitSelected] = useState(false);
  const [isMoneySelected, setIsMoneySelected] = useState(false);

  const { register } = useFormContext();

  function selectOption(paymentMethod: PaymentMethod) {
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
            <FirstLineMessage>Endereço de Entrega</FirstLineMessage>
            <SecondLineMessage>
              Informe o endereço onde deseja receber seu pedido
            </SecondLineMessage>
          </div>
        </FormContentMessage>
        <PostalCodeInput>
          <CheckoutFormInput placeholder="CEP" {...register("postalCode")} />
        </PostalCodeInput>
        <AddressInput>
          <CheckoutFormInput placeholder="Rua" {...register("address")} />
        </AddressInput>

        <FormRow>
          <div>
            <CheckoutFormInput
              placeholder="Número"
              {...register("addressNumber", { valueAsNumber: true })}
            />
          </div>
          <AddressAdditionalInfoInput>
            <CheckoutFormInput
              placeholder="Complemento"
              {...register("addressAdditionalInfo")}
            />
          </AddressAdditionalInfoInput>
        </FormRow>

        <FormRow>
          <div>
            <CheckoutFormInput
              placeholder="Bairro"
              {...register("neighborhood")}
            />
          </div>
          <CityInput>
            <CheckoutFormInput placeholder="Cidade" {...register("city")} />
          </CityInput>
          <UFInput>
            <CheckoutFormInput placeholder="UF" {...register("uf")} />
          </UFInput>
        </FormRow>
      </FormContent>

      <FormContent>
        <FormContentMessage iconcolor="purple">
          <CurrencyDollar size={"1.375rem"} />
          <div>
            <FirstLineMessage>Pagamento</FirstLineMessage>
            <SecondLineMessage>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
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
