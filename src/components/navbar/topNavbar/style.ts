import { CommonStyleTypes } from "@/types/commonStyle.types";
import styled from "styled-components";

interface StyledTopNavbarProps extends CommonStyleTypes {
    position: "sticky" | "fixed" | "relative" | "abosolute" | "unset";
}

export const StyledTopNavbar = styled.div<StyledTopNavbarProps>`
    position: ${props => props.position};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    display: flex;
    height: 10vh;
    width: 100vw;
`