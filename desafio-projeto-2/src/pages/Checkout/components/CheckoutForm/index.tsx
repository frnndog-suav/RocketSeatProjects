import { zodResolver } from "@hookform/resolvers/zod";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { Input } from "../../../../components/Input";
import { PaymentMethodOption } from "../../../../components/PaymentMethodOption";
import { PaymentMethod } from "../../../../constants/types";
import {
  AddressAdditionalInfoInput,
  AddressInput,
  CheckoutFormContainer,
  CityInput,
  FirstLineMessage,
  Form,
  FormContent,
  FormContentMessage,
  FormRow,
  PaymentMethodOptionSelection,
  PostalCodeInput,
  SecondLineMessage,
  Title,
  UFInput,
} from "./styles";

const checkoutFormSchema = zod.object({
  postalCode: zod
    .number()
    .nonnegative()
    .min(8, "CEP inválido")
    .max(8, "CEP inválido"),
  address: zod.string(),
  addressNumber: zod.number().nonnegative(),
  addressAdditionalInfo: zod.string().optional(),
  neighborhood: zod.string(),
  city: zod.string(),
  uf: zod.string(),
});

type CheckoutFormData = zod.infer<typeof checkoutFormSchema>;

export function CheckoutForm() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      address: "",
      addressAdditionalInfo: "",
      addressNumber: 0,
      city: "",
      neighborhood: "",
      postalCode: 0,
      uf: "",
    },
  });

  const { handleSubmit } = checkoutForm;

  function handleOrderConfirmation(data: CheckoutFormData) {
    console.log(data);
  }

  return (
    <CheckoutFormContainer>
      <Title>Complete seu pedido</Title>
      <FormContent>
        <FormContentMessage iconColor="yellow-dark">
          <MapPin size={"1.375rem"} />
          <div>
            <FirstLineMessage>Endereço de Entrega</FirstLineMessage>
            <SecondLineMessage>
              Informe o endereço onde deseja receber seu pedido
            </SecondLineMessage>
          </div>
        </FormContentMessage>
        <Form onSubmit={handleSubmit(handleOrderConfirmation)}>
          <PostalCodeInput>
            <Input placeholder="CEP" required />
          </PostalCodeInput>
          <AddressInput>
            <Input placeholder="Rua" required />
          </AddressInput>

          <FormRow>
            <div>
              <Input placeholder="Número" required />
            </div>
            <AddressAdditionalInfoInput>
              <Input placeholder="Complemento" />
            </AddressAdditionalInfoInput>
          </FormRow>

          <FormRow>
            <div>
              <Input placeholder="Bairro" required />
            </div>
            <CityInput>
              <Input placeholder="Cidade" required />
            </CityInput>
            <UFInput>
              <Input placeholder="UF" required />
            </UFInput>
          </FormRow>
        </Form>
      </FormContent>

      <FormContent>
        <FormContentMessage iconColor="purple">
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
            isChecked={false}
          />
          <PaymentMethodOption
            icon={Bank}
            paymentMethod={PaymentMethod.Debit}
            isChecked={false}
          />
          <PaymentMethodOption
            icon={Money}
            paymentMethod={PaymentMethod.Money}
            isChecked={false}
          />
        </PaymentMethodOptionSelection>
      </FormContent>
    </CheckoutFormContainer>
  );
}
