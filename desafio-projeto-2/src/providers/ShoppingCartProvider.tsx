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

  function handleAddItem(newItem: ShoppingCartItem) {
    if (items.length === 0) {
      setItems([newItem]);
      return;
    }

    if (items.some((item) => item.coffee.id === newItem.coffee.id)) {
      const updatedList = items.map((item) => {
        if (item.coffee.id === newItem.coffee.id) {
          return {
            ...item,
            quantity: item.quantity + newItem.quantity,
          };
        }

        return item;
      });

      setItems(updatedList);
      return;
    }

    setItems((currentList) => [...currentList, newItem]);
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
