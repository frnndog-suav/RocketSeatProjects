import { CheckoutForm } from "./components/CheckoutForm";
import { ItemsReview } from "./components/ItemsReview";
import { CheckoutContainer, CheckoutContent } from "./style";

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutContent>
        <CheckoutForm />
        <ItemsReview />
      </CheckoutContent>
    </CheckoutContainer>
  );
};
