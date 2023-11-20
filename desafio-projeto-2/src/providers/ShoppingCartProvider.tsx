import { createContext, useState } from "react";
import { ShoppingCartItem } from "../constants/types";

interface ShoppingCartContextType {
  items: ShoppingCartItem[];
  handleAddItem(item: ShoppingCartItem): void;
  getShoppingCartItemsAmount(): number;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

interface ShoppingCartContextProviderProps {
  children: React.ReactNode;
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [items, setItems] = useState<ShoppingCartItem[]>([]);

  function handleAddItem(item: ShoppingCartItem) {
    setItems((currentItems) => [...currentItems, item]);
  }

  function getShoppingCartItemsAmount() {
    return items.reduce(
      (previousValue, current) => current.quantity + previousValue,
      0
    );
  }

  return (
    <ShoppingCartContext.Provider
      value={{ items, handleAddItem, getShoppingCartItemsAmount }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
