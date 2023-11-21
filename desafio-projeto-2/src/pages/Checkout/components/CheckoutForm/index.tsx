import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin } from "@phosphor-icons/react";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import {
  CheckoutFormContainer,
  FirstLineMessage,
  FormContent,
  FormContentMessage,
  SecondLineMessage,
  Title,
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
        <FormContentMessage>
          <MapPin size={"1.375rem"} />
          <div>
            <FirstLineMessage>Endereço de Entrega</FirstLineMessage>
            <SecondLineMessage>
              Informe o endereço onde deseja receber seu pedido
            </SecondLineMessage>
          </div>
        </FormContentMessage>
        <FormProvider {...checkoutForm}>
          <form onSubmit={handleSubmit(handleOrderConfirmation)}></form>
        </FormProvider>
      </FormContent>
    </CheckoutFormContainer>
  );
}
