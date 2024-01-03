import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LeftArrowImg from "../../../../assets/angle-left-solid.svg";
import { Link } from "../../../../components/Link";
import { GithubContext } from "../../../../context/GithubContext";
import { IssuesDetailsCard } from "../IssuesDetailsCard";
import {
  ActionsContainer,
  DisplayCardContainer,
  GoBackLink,
  Name,
} from "./styles";

export function DisplayCard() {
  const navigate = useNavigate();
  const { detailedIssue } = useContext(GithubContext);

  const redirectionLink = detailedIssue?.html_url ?? "";

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
        <Link label="VER NO GITHUB" redirectionLink={redirectionLink} />
      </ActionsContainer>
      <Name>{detailedIssue?.title}</Name>
      <IssuesDetailsCard />
    </DisplayCardContainer>
  );
}
