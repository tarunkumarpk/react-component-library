import { CommonComponentTypes } from "@/types/commonComponent.types";
import { StyledTopNavbar } from "./style";

interface TopNavbarProps extends CommonComponentTypes {
    position?: "sticky" | "fixed" | "relative" | "abosolute" | "unset";
    navItemPosition?: "left" | "center" | "right";
    children?: string | JSX.Element;
}

export default function TopNavbar({
    position = "fixed",
    backgroundColor = "blue",
    color,
    style,
    children
}: TopNavbarProps) {
    return (
        <StyledTopNavbar
            style={style}
            position={position}
            backgroundColor={backgroundColor}
            color={color}
        >{children}</StyledTopNavbar>
    );
}
