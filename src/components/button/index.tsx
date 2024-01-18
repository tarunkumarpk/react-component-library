import { CSSProperties } from "react";
import "./style.css";

interface ButtonProps {
    label: string;
    type?: "submit" | "reset" | "button";
    variant?: "contained" | "outlined" | "text";
    color?: "success" | "error" | "primary";
    onClick?: Function;
    size?: "small" | "medium" | "large";
    style?: CSSProperties;
}

const Button = ({
    type,
    label,
    variant,
    color,
    size,
    onClick,
    style,
}: ButtonProps) => {
    return <button
        type={type}
        style={style}
        onClick={()=>{ onClick && onClick() }}
        className={`${variant ?? "contained"} ${color} ${size ?? "medium"}`}
    >
        {label}
    </button>;
};

export default Button;