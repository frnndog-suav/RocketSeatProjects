import { Button } from "../../../../components/Button";
import { useShoppingCartContext } from "../../../../contexts";
import { Review } from "./Review";
import {
  ItemsContainer,
  ItemsReviewContainer,
  ItemsTotalsContainer,
  ItemsTotalsContainerRow,
  Title,
} from "./styles";

const deliveryFee = 3.5;

export function ItemsReview() {
  const { items } = useShoppingCartContext();

  const totalItemsPrice = items.reduce(
    (previousItems, currentItem) =>
      currentItem.coffee.value * currentItem.quantity + previousItems,
    0
  );

  const orderPrice = totalItemsPrice + deliveryFee;

  return (
    <ItemsReviewContainer>
      <Title>Cafés selecionados</Title>
      <ItemsContainer>
        {items.map((item) => (
          <Review key={`item-review-${item.coffee.id}`} item={item} />
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
