import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "@phosphor-icons/react";
import { useReducer } from "react";
import { useFormContext } from "react-hook-form";
import { PaymentMethodOption } from "../../../../components/PaymentMethodOption";
import { PaymentMethod } from "../../../../constants/types";
import {
  selectCreditAction,
  selectDebitAction,
  selectMoneyAction,
} from "../../../../reducer/paymentToggle/actions";
import {
  PaymentMethodToggleState,
  paymentToggleReducer,
} from "../../../../reducer/paymentToggle/reducer";
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
  const [paymentMethodToggle, dispatch] = useReducer(
    (state: PaymentMethodToggleState, action: any) =>
      paymentToggleReducer(state, action),
    {
      isCreditSelected: false,
      isDebitSelected: false,
      isMoneySelected: false,
    } as PaymentMethodToggleState
  );

  const { register, setValue } = useFormContext();

  function selectOption(paymentMethod: PaymentMethod) {
    setValue("paymentMethod", paymentMethod);

    switch (paymentMethod) {
      case PaymentMethod.Credit:
        dispatch(selectCreditAction());
        return;
      case PaymentMethod.Debit:
        dispatch(selectDebitAction());
        return;
      default:
        dispatch(selectMoneyAction());
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
            isChecked={paymentMethodToggle.isCreditSelected}
            selectOption={selectOption}
          />
          <PaymentMethodOption
            icon={Bank}
            paymentMethod={PaymentMethod.Debit}
            isChecked={paymentMethodToggle.isDebitSelected}
            selectOption={selectOption}
          />
          <PaymentMethodOption
            icon={Money}
            paymentMethod={PaymentMethod.Money}
            isChecked={paymentMethodToggle.isMoneySelected}
            selectOption={selectOption}
          />
        </PaymentMethodOptionSelection>
      </FormContent>
    </CheckoutFormContainer>
  );
}
