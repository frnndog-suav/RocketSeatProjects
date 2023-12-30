import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  width: fit-content;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  gap: 2rem;
  margin: -5rem auto;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const GithubInfosContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  justify-content: start !important;

  div {
    display: flex;
    align-items: center;
    margin-right: 1rem;

    span {
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;

export const GithubImage = styled.img`
  opacity: 0.3;
  height: 1rem !important;
  width: 2rem !important;
`;

export const BuildingImage = styled.img`
  opacity: 0.3;
  height: 1rem !important;
  width: 2rem !important;
`;

export const FollowersImage = styled.img`
  opacity: 0.3;
  height: 1rem !important;
  width: 2rem !important;
`;

export const Name = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 130%;
  color: ${(props) => props.theme["base-title"]};
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 160%;
  width: 38.25rem;
  margin-top: 0.5rem;
  color: ${(props) => props.theme["base-text"]};
`;
