import { useNavigate } from "react-router-dom";
import LeftArrowImg from "../../../../assets/angle-left-solid.svg";
import { GithubInfos } from "../../../../components/GithubInfos";
import { Link } from "../../../../components/Link";
import {
  ActionsContainer,
  DisplayCardContainer,
  GoBackLink,
  Name,
} from "./styles";

export function DisplayCard() {
  const navigate = useNavigate();

  function handleGoToPreviousPage() {
    navigate(-1);
  }

  return (
    <DisplayCardContainer>
      <ActionsContainer>
        <GoBackLink onClick={handleGoToPreviousPage}>
          <div>
            <img src={LeftArrowImg} />
            <span>{"VOLTAR"}</span>
          </div>
        </GoBackLink>
        <Link label="VER NO GITHUB" />
      </ActionsContainer>
      <Name>Titulo da issue</Name>
      <GithubInfos />
    </DisplayCardContainer>
  );
}
