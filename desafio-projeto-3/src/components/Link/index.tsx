import { LinkContainer } from "./styles";
import ArrowUpRightFromSquareImg from "../../assets/arrow-up-right-from-square-solid.svg";

type LinkProps = {
  label: string;
};

export function Link({ label }: LinkProps) {
  return (
    <LinkContainer>
      <div>
        <a>{label}</a>
        <img src={ArrowUpRightFromSquareImg} />
      </div>
    </LinkContainer>
  );
}
