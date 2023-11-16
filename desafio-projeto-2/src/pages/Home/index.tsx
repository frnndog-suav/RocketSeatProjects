import { CreditCard } from "@phosphor-icons/react";
import { Button } from "../../components/Button";
import { Cart } from "../../components/Cart";
import { PaymentMethodOption } from "../../components/PaymentMethodOption";

import { RemoveItemButton } from "../../components/RemoveItemButton";
import { ShoppingCartButton } from "../../components/ShoppingCartButton";
import { PaymentMethod } from "../../constants/types";

export const Home = () => {
  return (
    <div>
      {/* <Button handleOnClick={() => console.log("teste")} />
      <RemoveItemButton handleOnClick={() => console.log("teste")} />
      <ShoppingCartButton handleOnClick={() => console.log("teste")} />
      <Cart /> */}
      <PaymentMethodOption
        paymentMethod={PaymentMethod.Credit}
        isChecked
        icon={CreditCard}
      />
    </div>
  );
};
