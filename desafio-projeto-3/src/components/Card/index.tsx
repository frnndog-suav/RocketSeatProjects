import { CardContainer, Description, PublicationDate, Title } from "./styles";

type CardProps = {
  title: string;
  description: string;
  publicationDate: string;
};

export function Card({ title, description, publicationDate }: CardProps) {
  return (
    <CardContainer>
      <div>
        <Title>{title}</Title>
        <PublicationDate>{publicationDate}</PublicationDate>
      </div>
      <Description>{description}</Description>
    </CardContainer>
  );
}
