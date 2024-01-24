import { CommonComponentTypes } from "@/types/commonComponent.types";
import { StyleCardAction } from "./style";

interface CardActionProps extends CommonComponentTypes {
  children: string | JSX.Element;
  padding?: string;
}

export default function CardAction({
  children,
  style,
  backgroundColor,
  color,
  padding = "10px",
}: CardActionProps) {
  return (
    <StyleCardAction padding={padding} style={style} backgroundColor={backgroundColor} color={color}>
      {children}
    </StyleCardAction>
  )
}