import { styled } from "styled-components";

export const SuccessContainer = styled.main`
  display: flex;
  align-items: center;
  padding: 7rem 0px;
  width: 100%;
  justify-content: center;
  gap: 7rem;
  padding: 10rem;

  & img {
    width: 30.75rem;
    height: 18rem;
  }

  & span {
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: 2rem;
    line-height: 130%;
    font-weight: 600;
    font-family: "Baloo 2", sans-serif;
  }

  & p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    line-height: 130%;
  }
`;

export const ConfirmedDataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoDisplay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  margin-top: 2.5rem;
  border: double 1px transparent;
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  background-image: linear-gradient(white, white),
    radial-gradient(
      circle at top left,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;

export const AddressInfoDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  & span {
    font-family: "Roboto";
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    font-weight: 500;
  }

  & p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    font-weight: 600;
  }

  & div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;

const IconBackground = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 999px;
`;

export const MapPinIcon = styled(IconBackground)`
  background-color: ${(props) => props.theme.purple};
  color: white;
`;

export const TimeIcon = styled(IconBackground)`
  background-color: ${(props) => props.theme.yellow};
  color: white;
`;

export const MoneyIcon = styled(IconBackground)`
  background-color: ${(props) => props.theme["yellow-dark"]};
  color: white;
`;
