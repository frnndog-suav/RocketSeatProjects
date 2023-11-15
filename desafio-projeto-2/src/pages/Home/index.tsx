import { Button } from "../../components/Button";
import { Cart } from "../../components/Cart";

import { RemoveItemButton } from "../../components/RemoveItemButton";
import { ShoppingCartButton } from "../../components/ShoppingCartButton";

export const Home = () => {
  return (
    <div>
      <Button handleOnClick={() => console.log("teste")} text="TESTE" />
      <RemoveItemButton handleOnClick={() => console.log("teste")} />
      <ShoppingCartButton handleOnClick={() => console.log("teste")} />
      <Cart />
    </div>
  );
};
