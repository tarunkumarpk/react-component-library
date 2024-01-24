import { StyledButton } from "./style";
import { CommonComponentTypes } from "@/types/commonComponent.types";

interface ButtonProps extends CommonComponentTypes {
    label: string;
    type?: "submit" | "reset" | "button";
    variant?: "contained" | "outlined" | "text";
    onClick?: React.FunctionComponent;
    size?: "small" | "medium" | "large";
}

const Button = ({
    type = "button",
    label,
    variant = "contained",
    color = "white",
    backgroundColor = "blue",
    size = "medium",
    onClick,
    style,
}: ButtonProps) => {
    return <StyledButton
        type={type}
        onClick={onClick}
        style={style}
        backgroundColor={backgroundColor}
        variant={variant}
        color={color}
        size={size}
    >
        {label}
    </StyledButton>;
};

export default Button;