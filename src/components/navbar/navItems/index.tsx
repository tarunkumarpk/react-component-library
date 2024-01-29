import { CommonComponentTypes } from "@/types/commonComponent.types";
import { StyledNavbarItem, StyledNavbarItems } from "./style";

interface NavbarItemsProps extends CommonComponentTypes {
    children: JSX.Element[];
    navItemPosition?: "left" | "center" | "right";
}

export default function NavbarItems({
    backgroundColor,
    color = "white",
    style,
    children,
    navItemPosition = "left"
}: NavbarItemsProps) {
    return (
        <StyledNavbarItems
            style={style}
            backgroundColor={backgroundColor}
            color={color}
            navItemPosition={navItemPosition}
        >
            {children.map(child=><StyledNavbarItem>{child}</StyledNavbarItem>)}
        </StyledNavbarItems>
    );
}