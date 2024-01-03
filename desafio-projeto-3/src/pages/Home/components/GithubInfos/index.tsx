import {
  BuildingImage,
  FollowersImage,
  GithubImage,
  GithubInfosContainer,
} from "./styles";
import BuildingIcon from "../../../../assets/building-solid.svg";
import GithubIcon from "../../../../assets/github.svg";
import FollowersIcon from "../../../../assets/user-group-solid.svg";
import { useContext } from "react";
import { GithubContext } from "../../../../context/GithubContext";

export function GithubInfos() {
  const { user } = useContext(GithubContext);

  return (
    <GithubInfosContainer>
      <div>
        <GithubImage src={GithubIcon} />
        <span>{user?.login}</span>
      </div>
      <div>
        <BuildingImage src={BuildingIcon} />
        <span>{user?.company}</span>
      </div>
      <div>
        <FollowersImage src={FollowersIcon} />
        <span>{`${user?.followers} seguidores`}</span>
      </div>
    </GithubInfosContainer>
  );
}
