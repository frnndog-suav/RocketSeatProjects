import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { CheckoutForm } from "./components/CheckoutForm";
import { ItemsReview } from "./components/ItemsReview";
import { CheckoutContainer, CheckoutContent } from "./style";

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
      postalCode: 0,
      uf: "",
    },
  });

  return (
    <CheckoutContainer>
      <CheckoutContent>
        <FormProvider {...checkoutForm}>
          <CheckoutForm />
          <ItemsReview />
        </FormProvider>
      </CheckoutContent>
    </CheckoutContainer>
  );
};
