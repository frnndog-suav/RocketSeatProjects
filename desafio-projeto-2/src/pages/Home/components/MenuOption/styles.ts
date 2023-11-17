import styled from "styled-components";

export const MenuOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["base-card"]};
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  text-align: center;
  gap: 0.5rem;

  & img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -2rem;
  }

  & span {
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 600;
    padding: 0px;
  }

  & p {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const MenuOptionBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 1.5rem;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  height: fit-content;
`;

export const CoffeeTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 0.25rem 0.5rem;
  color: ${(props) => props.theme["yellow-dark"]};
  background-color: ${(props) => props.theme["yellow-light"]};
  border-radius: 999px;
  font-size: 0.625rem;
  line-height: 130%;
  font-weight: 600;
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;

  color: ${(props) => props.theme["base-text"]};

  & span {
    font-size: 1.5rem;
    line-height: 130%;
    font-weight: 600;
    padding: 0px;
  }

  & p {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
