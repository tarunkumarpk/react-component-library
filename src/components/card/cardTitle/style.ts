import { CommonStyleTypes } from "@/types/commonStyle.types";
import styled from "styled-components";

interface StyledCardTitleStyle extends CommonStyleTypes {
  fontSize: string | "small" | "medium" | "large" | "larger" | "x-large" | "xx-large" ;
  fontWeight: "lighter" | "bold" | "bolder";
}

export const StyleCardTitle = styled.div<StyledCardTitleStyle>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  width: 100%;
`;
