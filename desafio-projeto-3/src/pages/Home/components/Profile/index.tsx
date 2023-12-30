import BuildingIcon from "../../../../assets/building-solid.svg";
import GithubIcon from "../../../../assets/github.svg";
import ProfileImg from "../../../../assets/profile-pic-test.jpg";
import FollowersIcon from "../../../../assets/user-group-solid.svg";
import { Link } from "../../../../components/Link";
import {
  BuildingImage,
  Description,
  FollowersImage,
  GithubImage,
  GithubInfosContainer,
  Name,
  ProfileContainer,
  ProfileInfoBox,
} from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <img src={ProfileImg} />
      <ProfileInfoBox>
        <div>
          <Name>Smitty Werbenjägermanjensen</Name>
          <Link label="GITHUB" />
        </div>
        <Description>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Description>
        <GithubInfosContainer>
          <div>
            <GithubImage src={GithubIcon} />
            <span>cameronwll</span>
          </div>
          <div>
            <BuildingImage src={BuildingIcon} />
            <span>Rocketseat</span>
          </div>
          <div>
            <FollowersImage src={FollowersIcon} />
            <span>32 seguidores</span>
          </div>
        </GithubInfosContainer>
      </ProfileInfoBox>
    </ProfileContainer>
  );
}
