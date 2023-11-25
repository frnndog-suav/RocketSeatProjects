import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { CheckoutForm } from "./components/CheckoutForm";

import { ItemsReview } from "./components/ItemsReview";
import { CheckoutContainer, CheckoutContent, Form } from "./style";

const cepRegex = /^\d{5}-\d{3}$/;

const checkoutFormSchema = zod.object({
  postalCode: zod
    .string()
    .refine((value) => cepRegex.test(value), "CEP é inválido."),
  address: zod.string(),
  addressNumber: zod.number().nonnegative(),
  addressAdditionalInfo: zod.string().optional(),
  neighborhood: zod.string(),
  city: zod.string(),
  uf: zod.string(),
});

export type CheckoutFormData = zod.infer<typeof checkoutFormSchema>;

export const Checkout = () => {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      address: "",
      addressAdditionalInfo: "",
      addressNumber: 0,
      city: "",
      neighborhood: "",
      postalCode: "",
      uf: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = checkoutForm;

  function handleOrderConfirmation(data: CheckoutFormData) {
    console.log(data);
  }

  console.log("errors", errors);

  return (
    <CheckoutContainer>
      <CheckoutContent>
        <Form onSubmit={handleSubmit(handleOrderConfirmation)}>
          <FormProvider {...checkoutForm}>
            <CheckoutForm />
            <ItemsReview />
          </FormProvider>
        </Form>
      </CheckoutContent>
    </CheckoutContainer>
  );
};
