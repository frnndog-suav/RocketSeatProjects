import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0 auto;
  width: 100%;
  margin-top: 7rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.span`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 0.875rem;
  font-weight: bold;
`;

export const PublicationsCount = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-span"]};
`;
