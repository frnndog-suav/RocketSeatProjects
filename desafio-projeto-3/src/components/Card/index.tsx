import { CardContainer, Description, PublicationDate, Title } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

type CardProps = {
  title: string;
  description: string;
  publicationDate: string;
};

export function Card({ title, description, publicationDate }: CardProps) {
  function formattedDescription() {
    if (description.length > 255) {
      return description.slice(0, 255).concat("...");
    }

    return description;
  }

  return (
    <CardContainer>
      <div>
        <Title>{title}</Title>
        <PublicationDate>
          {formatDistanceToNow(new Date(publicationDate), {
            addSuffix: true,
            locale: ptBR,
          })}
        </PublicationDate>
      </div>
      <Description>{formattedDescription()}</Description>
    </CardContainer>
  );
}
