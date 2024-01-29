import { CommonComponentTypes } from "@/types/commonComponent.types";
import { StyledNavbarSettings } from "./style";

interface SideNavbarProps extends CommonComponentTypes {
    children: JSX.Element;
}

export default function NavbarSettings({
    backgroundColor,
    color = "white",
    style,
    children
}: SideNavbarProps) {
    return (
        <StyledNavbarSettings
            style={style}
            backgroundColor={backgroundColor}
            color={color}
        >{children}</StyledNavbarSettings>
    );
}