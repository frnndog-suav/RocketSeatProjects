import { Button } from "../../components/Button";
import { RemoveItemButton } from "../../components/RemoveItemButton";

export const Home = () => {
  return (
    <div>
      <Button handleOnClick={() => console.log("teste")} text="TESTE" />
      <RemoveItemButton handleOnClick={() => console.log("teste")} />
    </div>
  );
};
