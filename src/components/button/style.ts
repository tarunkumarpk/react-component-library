import styled, { css } from "styled-components";

type color = "aqua" | "black" | "blue" | "gray" | "green" | "lime" | "maroon" | "purple" | "red" | "silver" | "white" | "yellow";

export const StyledButton = styled.button<{
  variant?: "contained" | "outlined" | "text";
  color?: color;
  backgroundColor?: color;
  size?: "small" | "medium" | "large";
}>`
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  border: none;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};

  ${({ variant }) =>
    variant === "contained" &&
    css`
      background-color: "blue";
      color: white;
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      border: 2px solid black;
      background-color: inherit;
      color: black;
    `}

  ${({ variant }) =>
    variant === "text" &&
    css`
      border: none;
      background-color: inherit;
    `}
    
  ${({ size }) =>
    size === "small" &&
    css`
      padding: 5px 10px;
      font-size: small;
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      padding: 10px 20px;
      font-size: medium;
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      padding: 15px 30px;
      font-size: larger;
    `}
    
  &:hover {
    background-color: rgb(204, 201, 201);
    color: inherit;
  }
`;
