import { CommonStyleTypes } from "@/types/commonStyle.types";
import styled from "styled-components";

interface StyledCardContentStyle extends CommonStyleTypes {
  padding: string,
}

export const StyleCardContent = styled.div<StyledCardContentStyle>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding: ${props => props.padding};
  width: 100%;
`;
