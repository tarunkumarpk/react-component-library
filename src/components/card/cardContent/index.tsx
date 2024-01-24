import { CommonComponentTypes } from "@/types/commonComponent.types";
import { StyleCardContent } from "./style";

interface CardContentProps extends CommonComponentTypes {
    children: string | JSX.Element;
    padding?: string;
}

export default function CardContent({
    children,
    style,
    backgroundColor,
    color,
    padding= "10px",
}: CardContentProps) {
    return (
        <StyleCardContent padding={padding} style={style} backgroundColor={backgroundColor} color={color}>
            {children}
        </StyleCardContent>
    )
}