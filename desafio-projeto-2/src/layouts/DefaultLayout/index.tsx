import { MapPin } from "@phosphor-icons/react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/coffee-delivery-logo.svg";
import { HeaderContainer, PlaceBadge } from "./styles";
import { Cart } from "../../components/Cart";

export const DefaultLayout = () => {
  return (
    <>
      <HeaderContainer>
        <img src={Logo} />
        <div>
          <PlaceBadge>
            <MapPin size={"1.375rem"} weight="fill" />
            <span>Porto Alegre, RS</span>
          </PlaceBadge>
          <Cart />
        </div>
      </HeaderContainer>
      <Outlet />
    </>
  );
};
