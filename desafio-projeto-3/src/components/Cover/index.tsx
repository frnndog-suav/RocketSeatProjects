import { CoverContainer } from "./styles";
import CoverImg from "../../assets/Cover.svg";

export function Cover() {
  return (
    <CoverContainer>
      <img src={CoverImg} />
    </CoverContainer>
  );
}
