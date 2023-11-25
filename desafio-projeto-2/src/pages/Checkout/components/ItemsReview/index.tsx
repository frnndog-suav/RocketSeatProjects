import { Button } from "../../../../components/Button";
import { Counter } from "../../../../components/Counter";
import { RemoveItemButton } from "../../../../components/RemoveItemButton";
import { ShoppingCartItem } from "../../../../constants/types";
import { useShoppingCartContext } from "../../../../contexts";
import {
  Divider,
  Item,
  ItemContent,
  ItemContentActions,
  ItemTexts,
  ItemsContainer,
  ItemsReviewContainer,
  ItemsTotalsContainer,
  ItemsTotalsContainerRow,
  Title,
} from "./styles";

const deliveryFee = 3.5;

export function ItemsReview() {
  const {
    items,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItemFromShoppingCart,
  } = useShoppingCartContext();

  const totalItemsPrice = items.reduce(
    (previousItems, currentItem) =>
      currentItem.coffee.value * currentItem.quantity + previousItems,
    0
  );

  const orderPrice = totalItemsPrice + deliveryFee;

  function handleIncreaseItemQuantity(handledItem: ShoppingCartItem) {
    increaseItemQuantity(handledItem);
  }

  function handleDecreaseItemQuantity(handledItem: ShoppingCartItem) {
    decreaseItemQuantity(handledItem);
  }

  function handleRemoveItem(handledItem: ShoppingCartItem) {
    removeItemFromShoppingCart(handledItem);
  }

  return (
    <ItemsReviewContainer>
      <Title>Cafés selecionados</Title>
      <ItemsContainer>
        {items.map((item) => (
          <Divider key={item.coffee.id}>
            <Item>
              <img src={item.coffee.imgSrc} alt={item.coffee.name} />
              <ItemContent>
                <ItemTexts>
                  <p>{item.coffee.name}</p>
                  <span>
                    {new Intl.NumberFormat("pt-Br", {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 3,
                    }).format(item.coffee.value * item.quantity)}
                  </span>
                </ItemTexts>
                <ItemContentActions>
                  <Counter
                    itemQuantity={item.quantity}
                    handleIncreaseQuantity={() =>
                      handleIncreaseItemQuantity(item)
                    }
                    handleDecreaseQuantity={() =>
                      handleDecreaseItemQuantity(item)
                    }
                  />
                  <RemoveItemButton
                    handleOnClick={() => handleRemoveItem(item)}
                  />
                </ItemContentActions>
              </ItemContent>
            </Item>
          </Divider>
        ))}
        <ItemsTotalsContainer>
          <ItemsTotalsContainerRow>
            <p>Total de itens</p>
            <p>
              {new Intl.NumberFormat("pt-Br", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 3,
              }).format(totalItemsPrice)}
            </p>
          </ItemsTotalsContainerRow>
          <ItemsTotalsContainerRow>
            <p>Entrega</p>
            <p>
              {new Intl.NumberFormat("pt-Br", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 3,
              }).format(deliveryFee)}
            </p>
          </ItemsTotalsContainerRow>
          <ItemsTotalsContainerRow>
            <span>Total</span>
            <span>
              {new Intl.NumberFormat("pt-Br", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 3,
              }).format(orderPrice)}
            </span>
          </ItemsTotalsContainerRow>
          <Button />
        </ItemsTotalsContainer>
      </ItemsContainer>
    </ItemsReviewContainer>
  );
}
