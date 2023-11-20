import { styled } from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  position: relative;
`;

export const CartBadge = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: none;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  height: 2.375rem;
  width: 2.375rem;
`;

interface CounterBadgeProps {
  count: number;
}

export const CounterBadge = styled.div<CounterBadgeProps>`
  &::after {
    display: ${(props) => (props.count === 0 ? "none" : "block")};
    content: ${(props) => `"${props.count}"`};
    padding: 0.3rem 0.5rem;
    border-radius: 999px;
    background-color: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: 600;
    font-family: "Roboto";
    position: absolute;
    top: -10px;
    left: 24px;
  }
`;
