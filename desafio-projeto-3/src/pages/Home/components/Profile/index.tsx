import { useContext } from "react";
import BuildingIcon from "../../../../assets/building-solid.svg";
import GithubIcon from "../../../../assets/github.svg";
import ProfileImg from "../../../../assets/profile-pic-test.jpg";
import FollowersIcon from "../../../../assets/user-group-solid.svg";
import { Link } from "../../../../components/Link";
import { GithubContext } from "../../../../context/GithubContext";
import {
  BuildingImage,
  Description,
  FollowersImage,
  GithubImage,
  GithubInfosContainer,
  Name,
  ProfileContainer,
  ProfileInfoBox,
  TopContainer,
} from "./styles";

export function Profile() {
  const { user } = useContext(GithubContext);

  return (
    <ProfileContainer>
      <img src={ProfileImg} />
      <ProfileInfoBox>
        <div>
          <TopContainer>
            <Name>{user?.name}</Name>
            <Link label="GITHUB" />
          </TopContainer>
          <Description>{user?.bio}</Description>
        </div>
        <GithubInfosContainer>
          <div>
            <GithubImage src={GithubIcon} />
            <span>{user?.login}</span>
          </div>
          <div>
            <BuildingImage src={BuildingIcon} />
            <span>{user?.location}</span>
          </div>
          <div>
            <FollowersImage src={FollowersIcon} />
            <span>{`${user?.followers} seguidores`}</span>
          </div>
        </GithubInfosContainer>
      </ProfileInfoBox>
    </ProfileContainer>
  );
}
