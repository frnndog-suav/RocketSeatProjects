import { Outlet } from "react-router-dom";
import { Cover } from "../components/Cover";
import { Content, DefaultLayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Cover />
      <Content>
        <Outlet />
      </Content>
    </DefaultLayoutContainer>
  );
}
