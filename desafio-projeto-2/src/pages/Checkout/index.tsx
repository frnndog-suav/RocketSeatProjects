import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { CheckoutForm } from "./components/CheckoutForm";

import { Coffee } from "@phosphor-icons/react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PaymentMethod } from "../../constants/types";
import { useShoppingCartContext } from "../../contexts";
import { ItemsReview } from "./components/ItemsReview";
import {
  CheckoutContainer,
  CheckoutContent,
  EmptyShoppingCartContainer,
  Form,
} from "./style";

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
  paymentMethod: zod
    .nativeEnum(PaymentMethod)
    .nullish()
    .refine((value) => value !== undefined, "Escolha uma forma de pagamento"),
});

export type CheckoutFormData = zod.infer<typeof checkoutFormSchema>;

export const CheckoutPage = () => {
  const { items } = useShoppingCartContext();
  const navigate = useNavigate();

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
      paymentMethod: undefined,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = checkoutForm;

  function handleOrderConfirmation(data: CheckoutFormData) {
    navigate("/success", {
      state: {
        formData: data,
      },
    });
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
        {items.length === 0 ? (
          <EmptyShoppingCartContainer>
            <Coffee size={"10rem"} />
            <p>{"Você não possui items no seu carrinho ;)"}</p>
            <p>
              {"Escolha seu produtos clicando "}
              <a href="/">{"aqui."}</a>
            </p>
          </EmptyShoppingCartContainer>
        ) : (
          <Form onSubmit={handleSubmit(handleOrderConfirmation)}>
            <FormProvider {...checkoutForm}>
              <CheckoutForm />
              <ItemsReview />
            </FormProvider>
          </Form>
        )}
      </CheckoutContent>
      <Toaster />
    </CheckoutContainer>
  );
};
