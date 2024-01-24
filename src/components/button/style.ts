import { CommonStyleTypes } from "@/types/commonStyle.types";
import styled, { css } from "styled-components";

interface StyledButtonType extends CommonStyleTypes {
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
}

export const StyledButton = styled.button<StyledButtonType>`
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  border: none;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};

  ${({ variant }) =>
    variant === "contained" &&
    css`
      background-color: blue;
      color: white;
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      border: 2px solid black;
      background-color: {backgroundColor};
      color: black;
    `}

  ${({ variant }) =>
    variant === "text" &&
    css`
      background-color: {backgroundColor};
      color: inherit;
      border: none;
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
