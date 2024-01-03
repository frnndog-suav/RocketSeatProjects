import styled from "styled-components";

export const GithubInfosContainer = styled.div`
  display: flex;
  align-items: center;
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
