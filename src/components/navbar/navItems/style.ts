import { CommonStyleTypes } from "@/types/commonStyle.types";
import styled from "styled-components";

interface StyledNavbarItemsProps extends CommonStyleTypes {
  navItemPosition: "left" | "center" | "right";
}

export const StyledNavbarItems = styled.aside<StyledNavbarItemsProps>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  display: flex;
  /* flex-direction: column; */
  width: 68.6vw;
  justify-content: ${(props) => props.navItemPosition};
`;

export const StyledNavbarItem = styled.li`
  text-decoration: none;
  padding: 0px 10px;
  display: flex;
  width: fit-content;
  font-size: larger;
  align-items: center;
`;

export const StyledNavbarLink = styled.link`
  display: flex;
  color: #fff;
  padding: 10px;
  transition: all 0.2s;

  &:hover {
    background: lightskyblue;
    color: #000;
    width: 100%;
    transition: all 0.5s;
  }
`;
