import { CommonStyleTypes } from "@/types/commonStyle.types";
import styled, { css } from "styled-components";

interface StyledCardType extends CommonStyleTypes {
  width?: string;
  height?: string;
  contentPosition?: "left" | "center" | "right";
  variant?: "contained" | "outlined";
}

export const StyledCard = styled.div<StyledCardType>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.contentPosition};
  padding: 2px 10px;
  border: 1px solid grey;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  ${({ variant }) =>
    variant === "contained" &&
    css`
      background-color: {backgroundColor};
      color: {color | white};
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      border: 2px solid black;
      background-color: {backgroundColor};
      color: {color | black};
    `}

  &:hover {
    box-shadow: -1px 1px 5px 5px #ebe7e8;
  }
`;