import { useLocation } from "react-router-dom";
import { CheckoutFormData } from "../Checkout";
import { SuccessContainer } from "./styles";

export function SuccessPage() {
  const { state } = useLocation();
  const { formData } = state;
  const data = formData as CheckoutFormData;

  return (
    <SuccessContainer>
      <h1>Success Page</h1>
      <p>teste</p>
      <span>{data.address}</span>
    </SuccessContainer>
  );
}
