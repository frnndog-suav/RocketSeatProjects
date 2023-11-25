import Cafe from "../../../../assets/coffee/americano.svg";
import { Button } from "../../../../components/Button";
import { Counter } from "../../../../components/Counter";
import { RemoveItemButton } from "../../../../components/RemoveItemButton";
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

export function ItemsReview() {
  const { items } = useShoppingCartContext();

  return (
    <ItemsReviewContainer>
      <Title>Cafés selecionados</Title>
      <ItemsContainer>
        {items.map((item) => (
          <Divider key={item.coffee.id}>
            <Item>
              <img src={Cafe} alt="Café americano" />
              <ItemContent>
                <ItemTexts>
                  <p>Expresso Americano</p>
                  <span>R$ 9,90</span>
                </ItemTexts>
                <ItemContentActions>
                  <Counter
                    handleIncreaseQuantity={() => {}}
                    handleDecreaseQuantity={() => {}}
                    itemQuantity={0}
                  />
                  <RemoveItemButton handleOnClick={() => {}} />
                </ItemContentActions>
              </ItemContent>
            </Item>
          </Divider>
        ))}
        <ItemsTotalsContainer>
          <ItemsTotalsContainerRow>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </ItemsTotalsContainerRow>
          <ItemsTotalsContainerRow>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </ItemsTotalsContainerRow>
          <ItemsTotalsContainerRow>
            <span>Total</span>
            <span>R$ 33,20</span>
          </ItemsTotalsContainerRow>
          <Button />
        </ItemsTotalsContainer>
      </ItemsContainer>
    </ItemsReviewContainer>
  );
}
