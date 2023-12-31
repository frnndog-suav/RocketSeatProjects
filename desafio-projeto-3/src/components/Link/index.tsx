import { LinkContainer } from "./styles";
import ArrowUpRightFromSquareImg from "../../assets/arrow-up-right-from-square-solid.svg";
import { useContext } from "react";
import { GithubContext } from "../../context/GithubContext";

type LinkProps = {
  label: string;
};

export function Link({ label }: LinkProps) {
  const { user } = useContext(GithubContext);

  return (
    <LinkContainer href={user?.html_url}>
      <div>
        <span>{label}</span>
        <img src={ArrowUpRightFromSquareImg} />
      </div>
    </LinkContainer>
  );
}
