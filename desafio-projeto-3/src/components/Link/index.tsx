import ArrowUpRightFromSquareImg from "../../assets/arrow-up-right-from-square-solid.svg";
import { LinkContainer } from "./styles";

type LinkProps = {
  label: string;
  redirectionLink: string;
};

export function Link({ label, redirectionLink }: LinkProps) {
  return (
    <LinkContainer href={redirectionLink}>
      <div>
        <span>{label}</span>
        <img src={ArrowUpRightFromSquareImg} />
      </div>
    </LinkContainer>
  );
}
