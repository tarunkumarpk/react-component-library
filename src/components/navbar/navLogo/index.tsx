import { CommonComponentTypes } from "@/types/commonComponent.types";
import { StyledBrandName, StyledNavbarLogo } from "./style";
import { color } from "@/types/color.type";
import { CSSProperties } from "react";

interface NavbarLogoProps extends CommonComponentTypes {
  logo?: JSX.Element;
  brandName?: string;
  brandNameColor?: color;
  brandNameStyle?: CSSProperties;
}

export default function NavbarLogo({
  backgroundColor,
  color,
  style,
  logo,
  brandName,
  brandNameColor,
  brandNameStyle
}: NavbarLogoProps) {
  return (
    <StyledNavbarLogo
      style={style}
      backgroundColor={backgroundColor}
      color={color}
    >
      {logo}
      <StyledBrandName style={brandNameStyle} color={brandNameColor}>
        {brandName}
      </StyledBrandName>
    </StyledNavbarLogo>
  );
}
