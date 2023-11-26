import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useLocation } from "react-router-dom";
import IllustrationImg from "../../assets/Illustration.svg";
import { CheckoutFormData } from "../Checkout";
import {
  AddressInfoDisplayContainer,
  ConfirmedDataContainer,
  InfoDisplay,
  MapPinIcon,
  MoneyIcon,
  SuccessContainer,
  TimeIcon,
} from "./styles";

export function SuccessPage() {
  const { state } = useLocation();
  const { formData } = state;
  const data = formData as CheckoutFormData;

  const addressFirstLine = `Entrega em ${data.address}, ${data.addressNumber}`;
  const addressSecondLine = `${data.neighborhood} - ${data.city}, ${data.uf}`;

  return (
    <SuccessContainer>
      <ConfirmedDataContainer>
        <span>Uhu! Pedido confirmado</span>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <InfoDisplay>
          <AddressInfoDisplayContainer>
            <MapPinIcon>
              <MapPin size={16} weight="fill" />
            </MapPinIcon>
            <div>
              <span>{addressFirstLine}</span>
              <p>{addressSecondLine}</p>
            </div>
          </AddressInfoDisplayContainer>
          <AddressInfoDisplayContainer>
            <TimeIcon>
              <Timer size={16} weight="fill" />
            </TimeIcon>
            <div>
              <span>Previsão de entrega</span>
              <p>20 min - 30 min </p>
            </div>
          </AddressInfoDisplayContainer>
          <AddressInfoDisplayContainer>
            <MoneyIcon>
              <CurrencyDollar size={16} />
            </MoneyIcon>
            <div>
              <span>Pagamento na entrega</span>
              <p>{data.paymentMethod}</p>
            </div>
          </AddressInfoDisplayContainer>
        </InfoDisplay>
      </ConfirmedDataContainer>
      <img src={IllustrationImg} alt="Pessoa andando numa lambreta" />
    </SuccessContainer>
  );
}
