import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { Issue } from "../../@types";
import { paths } from "../../router/routes";
import { CardContainer, Description, PublicationDate, Title } from "./styles";

type CardProps = {
  issue: Issue;
};

export function Card({ issue }: CardProps) {
  const navigate = useNavigate();

  function formattedDescription() {
    if (issue.body.length > 255) {
      return issue.body.slice(0, 255).concat("...");
    }

    return issue.body;
  }

  function handleIssueDetails() {
    const url = paths.details.replace(":number", issue.number.toString());
    navigate(url, { state: { number: issue.number } });
  }

  return (
    <CardContainer onClick={handleIssueDetails}>
      <div>
        <Title>{issue.title}</Title>
        <PublicationDate>
          {formatDistanceToNow(new Date(issue.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </PublicationDate>
      </div>
      <Description>{formattedDescription()}</Description>
    </CardContainer>
  );
}
