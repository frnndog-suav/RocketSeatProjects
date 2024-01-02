import styled from "styled-components";

export const DisplayCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  gap: 2rem;
  margin-top: -5rem;
`;

export const ActionsContainer = styled.div`
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

export const GoBackLink = styled.a`
  display: flex;
  align-items: center;
  width: fit-content;
  border-bottom: 1px solid transparent;
  border-radius: none;
  text-decoration: none;
  padding-top: 10px;
  padding-bottom: 10px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    height: 1rem !important;
    width: 2rem !important;
  }

  span {
    color: ${(props) => props.theme.blue};
    font-weight: bold;
    font-size: 0.75rem;
    margin-right: 0.6rem;
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
    cursor: pointer;
  }
`;
