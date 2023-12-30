import { LinkContainer } from "./styles";
import ArrowUpRightFromSquareImg from "../../assets/arrow-up-right-from-square-solid.svg";

type LinkProps = {
  label: string;
};

export function Link({ label }: LinkProps) {
  return (
    <LinkContainer href="#">
      <div>
        <span>{label}</span>
        <img src={ArrowUpRightFromSquareImg} />
      </div>
    </LinkContainer>
  );
}
