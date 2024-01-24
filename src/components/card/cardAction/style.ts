import { CommonStyleTypes } from "@/types/commonStyle.types";
import styled from "styled-components";

interface StyledCardActionStyle extends CommonStyleTypes {
  padding: string,
}

export const StyleCardAction = styled.div<StyledCardActionStyle>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  width: 100%;
  padding: ${props => props.padding};
`;
