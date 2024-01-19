import { Input, Label, TextFieldWrapper } from "../styles";

interface TextFieldProps {
  label?: string;
  placeholder?: string;
}

const TextField = ({ label, placeholder }: TextFieldProps) => {
  return (
    <TextFieldWrapper>
      {label && <Label>{label}</Label>}
      <Input type="text" placeholder={placeholder} />
    </TextFieldWrapper>
  );
};

export default TextField;
