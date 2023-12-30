import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 10px;
  gap: 1.25rem;
  border: 2px solid transparent;

  div {
    display: flex;
    justify-content: space-between;
  }

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme["base-label"]};
  }

  background-color: ${(props) => props.theme["base-post"]};
`;

export const Title = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 160%;
  color: ${(props) => props.theme["base-title"]};
`;

export const PublicationDate = styled.span`
  font-size: 0.875rem;
  line-height: 240%;
  color: ${(props) => props.theme["base-span"]};
`;

export const Description = styled.p`
  line-height: 160%;
  font-size: 1rem;
  color: ${(props) => props.theme["base-text"]};
`;
