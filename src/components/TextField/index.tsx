import React, { useEffect, useRef, useState } from "react";
import { Input, Label, TextFieldWrapper, Required } from "./style";

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  id?: string;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  helperText?: string;
  readonly?: boolean;
  disabled?: boolean;
}

const TextField = ({
  label,
  placeholder,
  type = "text",
  required = false,
  helperText = `${label} is required`,
  value = "",
  id = "",
  name = "",
  readonly = false,
  disabled = false,
}: TextFieldProps) => {

  const [inputValue, setInputValue] = useState<string>(value);
  const [errorMessage, setErrorMessage] = useState<string>(helperText);
  const inputRef = useRef<HTMLInputElement>(null);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const validation = () => {
    if (!inputValue) {
      setErrorMessage(helperText);
    } else if (type==="email" && !inputValue.match(emailRegex)) {
      setErrorMessage("Email is invalid");
    } else {
      setErrorMessage("");
    }
  };

  useEffect(validation, [inputRef.current?.value]);

  const onChangeHandler = () => {
    setInputValue(inputRef.current?.value as string);
  };

  return (
    <TextFieldWrapper>
      {label && (
        <Label>
          {label}
          {required && <Required>*</Required>}
        </Label>
      )}
      <Input
        ref={inputRef}
        type={type}
        value={inputValue}
        name={name}
        id={id}
        placeholder={placeholder}
        readOnly={readonly}
        disabled={disabled}
        onChange={onChangeHandler}
      />
      {required && errorMessage && <Required>{errorMessage}</Required>}
    </TextFieldWrapper>
  );
};

export default TextField;