import { Input } from "../../../../components/Input";
import { PublicationsCount, SearchBarContainer, Title } from "./styles";

export function SearchBar() {
  return (
    <SearchBarContainer>
      <div>
        <Title>Publicações</Title>
        <PublicationsCount>6 publicações</PublicationsCount>
      </div>
      <Input />
    </SearchBarContainer>
  );
}
