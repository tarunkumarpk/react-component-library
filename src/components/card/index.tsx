import { StyledCard } from "./style";
import { CommonComponentTypes } from "@/types/commonComponent.types";

interface ButtonProps extends CommonComponentTypes {
    width?: string,
    height?: string,
    variant?: "contained" | "outlined",
    contentPosition?: "left" | "center" | "right",
    children?: string | JSX.Element,
}

const Card = ({
    backgroundColor,
    color,
    variant= "contained",
    width = "fit-content",
    style,
    height,
    children
}: ButtonProps) => {
    return <StyledCard
        style={style}
        backgroundColor={backgroundColor}
        color={color}
        width={width}
        height={height}
        variant={variant}
    >
        {children}
    </StyledCard>;
};

export default Card;
export {default as CardAction} from "./cardAction";
export {default as CardContent} from "./cardContent";
export {default as CardTitle} from "./cardTitle";
