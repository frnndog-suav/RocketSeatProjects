import styled from "styled-components";

export const DetailsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Content = styled.div`
  color: ${(props) => props.theme["base-text"]};
`;
