import React from "react";
import { Wrapper, CheckBoxWrapper, Box } from "./style";

interface CheckboxProps {
  name: string;
  value: string | number;
  color?: string;
  icon?: JSX.Element;
  checkedIcon?: JSX.Element;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}
export default function Checkbox(props: CheckboxProps) {
  const { name, value, color } = props;
  const { checked, onChange } = props;

  const hideInput: React.CSSProperties = {
    position: "absolute",
    opacity: 0,
    height: 0,
    width: 0,
    cursor: "pointer",
  };
  const icon = props?.icon || <Box />;
  const checkedIcon = props?.checkedIcon || <Box color={color || "green"} />;

  return (
    <>
      <Wrapper>
        <input
          type="checkbox"
          name={name}
          value={value}
          color={color}
          checked={checked}
          onChange={onChange}
          style={hideInput}
        />
        <CheckBoxWrapper className="checkmark">
          {checked ? checkedIcon : icon}
        </CheckBoxWrapper>
      </Wrapper>
    </>
  );
}
