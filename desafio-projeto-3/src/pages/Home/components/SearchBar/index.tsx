import { useContext } from "react";
import { Input } from "../../../../components/Input";
import { GithubContext } from "../../../../context/GithubContext";
import { PublicationsCount, SearchBarContainer, Title } from "./styles";

export function SearchBar() {
  const { issues } = useContext(GithubContext);

  return (
    <SearchBarContainer>
      <div>
        <Title>Publicações</Title>
        <PublicationsCount>{`${issues.length} publicações`}</PublicationsCount>
      </div>
      <Input />
    </SearchBarContainer>
  );
}
