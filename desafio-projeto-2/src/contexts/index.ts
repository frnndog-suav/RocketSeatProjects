import { useContext } from "react";
import { ShoppingCartContext } from "../providers/ShoppingCartProvider";

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}
