import { CSSProperties } from "react";
import { StyledButton } from "./style";

type color =
  | "aqua"
  | "black"
  | "blue"
  | "gray"
  | "green"
  | "lime"
  | "maroon"
  | "purple"
  | "red"
  | "silver"
  | "white"
  | "yellow";

interface ButtonProps {
  label: string;
  type?: "submit" | "reset" | "button";
  variant?: "contained" | "outlined" | "text";
  color?: color;
  backgroundColor?: color;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  style?: CSSProperties;
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
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      style={style}
      backgroundColor={backgroundColor}
      variant={variant}
      color={color}
      size={size}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
