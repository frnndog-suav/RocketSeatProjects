import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GithubContext } from "../../context/GithubContext";
import { DisplayCard } from "./components/DisplayCard";
import { Content, DetailsPageContainer } from "./styles";

export function DetailsPage() {
  const { number = 0 } = useParams();
  const { getDetailedIssue, detailedIssue } = useContext(GithubContext);

  useEffect(() => {
    getDetailedIssue(Number(number));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DetailsPageContainer>
      <DisplayCard />
      <Content>{detailedIssue?.body}</Content>
    </DetailsPageContainer>
  );
}
