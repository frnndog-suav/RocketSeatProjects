import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  gap: 2rem;
  margin-top: -5rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin-top: 0.5rem;
  color: ${(props) => props.theme["base-text"]};
`;
