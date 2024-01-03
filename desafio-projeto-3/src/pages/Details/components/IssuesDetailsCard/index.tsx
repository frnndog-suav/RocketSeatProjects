import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useContext } from "react";
import CalendarIcon from "../../../../assets/calendar-day-solid.svg";
import CommentIcon from "../../../../assets/comment-solid.svg";
import GithubIcon from "../../../../assets/github.svg";
import { GithubContext } from "../../../../context/GithubContext";
import {
  CalendarImage,
  CommentImage,
  GithubImage,
  IssuesDetailsCardContainer,
} from "./styles";

export function IssuesDetailsCard() {
  const { user, detailedIssue } = useContext(GithubContext);

  return (
    <IssuesDetailsCardContainer>
      <div>
        <GithubImage src={GithubIcon} />
        <span>{user?.login}</span>
      </div>
      <div>
        <CalendarImage src={CalendarIcon} />
        <span>
          {detailedIssue &&
            formatDistanceToNow(new Date(detailedIssue.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
        </span>
      </div>
      <div>
        <CommentImage src={CommentIcon} />
        <span>{`${detailedIssue?.comments} comentários`}</span>
      </div>
    </IssuesDetailsCardContainer>
  );
}
