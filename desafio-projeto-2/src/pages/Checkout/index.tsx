import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { CheckoutForm } from "./components/CheckoutForm";

import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ItemsReview } from "./components/ItemsReview";
import { CheckoutContainer, CheckoutContent, Form } from "./style";

const cepRegex = /^\d{5}-\d{3}$/;

const checkoutFormSchema = zod.object({
  postalCode: zod
    .string()
    .min(1, "Preencha o campo de CEP")
    .refine((value) => cepRegex.test(value), "Formato do CEP é inválido"),
  address: zod.string().min(1, "Preencha o campo de endereço"),
  addressNumber: zod.number().int().nonnegative().min(1, "Número inválido"),
  addressAdditionalInfo: zod.string().optional(),
  neighborhood: zod.string().min(1, "Preencha o campo de bairro"),
  city: zod.string().min(1, "Preencha o campo de cidade"),
  uf: zod.string().min(2, "UF inválido").max(2, "UF inválido"),
  isPaymentMethodSelected: zod.literal(true, {
    errorMap: () => {
      return { message: "Escolha uma forma de pagamento" };
    },
  }),
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
      isPaymentMethodSelected: undefined,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = checkoutForm;

  function handleOrderConfirmation(data: CheckoutFormData) {
    console.log(data);
  }

  useEffect(() => {
    const errorsCounter = Object.keys(errors).length;

    if (errorsCounter > 0) {
      toast.error(Object.values(errors)[0].message!);
    }
  }, [errors]);

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
      <Toaster />
    </CheckoutContainer>
  );
};
