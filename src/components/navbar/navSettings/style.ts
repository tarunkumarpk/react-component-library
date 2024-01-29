import { CommonStyleTypes } from "@/types/commonStyle.types";
import styled from "styled-components";

interface NavbarSettingsProps extends CommonStyleTypes {

}

export const StyledNavbarSettings = styled.aside<NavbarSettingsProps>`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    display: flex;
    width: 17vw;
    align-items: center;
    justify-content: center;
    font-size: large;
`