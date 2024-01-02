import { useContext } from "react";
import { GithubInfos } from "../../../../components/GithubInfos";
import { Link } from "../../../../components/Link";
import { GithubContext } from "../../../../context/GithubContext";
import {
  Description,
  Name,
  ProfileContainer,
  ProfileInfoBox,
  TopContainer,
} from "./styles";

export function Profile() {
  const { user } = useContext(GithubContext);

  return (
    <ProfileContainer>
      <img src={user?.avatar_url} />
      <ProfileInfoBox>
        <div>
          <TopContainer>
            <Name>{user?.name}</Name>
            <Link label="GITHUB" />
          </TopContainer>
          <Description>{user?.bio}</Description>
        </div>
        <GithubInfos />
      </ProfileInfoBox>
    </ProfileContainer>
  );
}
