import React, { ReactNode } from "react";
import { Wrapper, Text } from "./style";

interface TooltipProps {
  title: string;
  placement?: "top" | "right" | "left" | "bottom";
  backGroundColor?: string;
  color?: string;
  arrow?: boolean;
  style?: React.CSSProperties;
  children: ReactNode;
}
export default function Tooltip(props: TooltipProps) {
  const { title, placement, arrow, style, children, backGroundColor, color } =
    props;
  return (
    <>
      <Wrapper>
        {children}
        <Text
          className="tooltiptext"
          placement={placement || "bottom"}
          arrow={arrow || false}
          style={{ backgroundColor: backGroundColor, color: color, ...style }}
        >
          {title}
        </Text>
      </Wrapper>
    </>
  );
}
