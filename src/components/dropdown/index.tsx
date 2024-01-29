import { useState } from "react";
import { DropdownButton, DropdownContent, DropdownItem } from "./style";

type optionType = { label: string; value: unknown } | string;
interface DropdownProps {
  options: optionType[];
  onSelect: (option: unknown) => void;
  color?: string;
  bgColor?: string;
  style?: object;
}

const Dropdown = ({
  options,
  onSelect,
  color = "black",
  bgColor = "white",
  style,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: optionType) => {
    let label, value;
    if (typeof option === "string") {
      label = value = option;
    } else {
      label = option.label;
      value = option.value;
    }
    handleToggle();

    setSelectedOption(label);
    onSelect(value);
  };

  return (
    <>
      <DropdownButton
        onClick={handleToggle}
        color={color}
        backgroundColor={bgColor}
        style={style}
      >
        {selectedOption ? selectedOption : "Select an option"}
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {options.map((option, index) => (
          <DropdownItem key={index} onClick={() => handleSelect(option)}>
            {typeof option !== "string" ? option.label : option}
          </DropdownItem>
        ))}
      </DropdownContent>
    </>
  );
};

export default Dropdown;
