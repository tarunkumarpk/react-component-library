import { CommonStyleTypes } from "@/types/commonStyle.types";
import styled from "styled-components";

export const StyledNavbarLogo = styled.aside<CommonStyleTypes>`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12vw;
`

export const StyledBrandName = styled.h2<CommonStyleTypes>`
    color: ${props => props.color};
    height: fit-content;
    padding: 0 9px;
`