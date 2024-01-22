import styled from "styled-components";

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #2196f3;
  }
`;

const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export { Label, Input, TextFieldWrapper };
