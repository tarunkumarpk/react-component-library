import React from "react";
import { Wrapper, RadioWrapper, Circle } from "./style";

interface RadioProps {
  name: string;
  value: string | number;
  color?: string;
  icon?: JSX.Element;
  checkedIcon?: JSX.Element;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}
export default function Radio(props: RadioProps) {
  const { name, value, color } = props;
  const { checked, onChange } = props;

  const hideInput: React.CSSProperties = {
    position: "absolute",
    opacity: 0,
    height: 0,
    width: 0,
    cursor: "pointer",
  };
  const icon = props?.icon || <Circle />;
  const checkedIcon = props?.checkedIcon || <Circle color={color || "green"} />;

  return (
    <>
      <Wrapper>
        <input
          type="radio"
          name={name}
          value={value}
          color={color}
          checked={checked}
          onChange={onChange}
          style={hideInput}
        />
        <RadioWrapper className="checkmark">
          {checked ? checkedIcon : icon}
        </RadioWrapper>
      </Wrapper>
    </>
  );
}
