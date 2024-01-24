import { CommonComponentTypes } from "@/types/commonComponent.types";
import { StyleCardTitle } from "./style";

interface CardTitleProps extends CommonComponentTypes {
  children: string | JSX.Element;
  fontSize?: string | "small" | "medium" | "large" | "larger" | "x-large" | "xx-larger";
  fontWeight?: "lighter" | "bold" | "bolder"
}

export default function CardTitle({
  children,
  style,
  backgroundColor,
  fontSize = "xx-large",
  fontWeight = "bolder",
  color,
}: CardTitleProps) {
  return (
    <StyleCardTitle fontWeight={fontWeight} fontSize={fontSize} style={style} backgroundColor={backgroundColor} color={color}>
      {children}
    </StyleCardTitle>
  )
}
