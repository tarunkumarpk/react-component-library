import styled from "styled-components";

interface IDropdownButton {
    backgroundColor: string;
    color: string;
}

interface IDropdownContent {
    isOpen: boolean;
}


export const DropdownButton = styled.button<IDropdownButton>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  padding: 10px;
  border: 1px solid gray;
  cursor: pointer;
  width: 160px;
`;

export const DropdownContent = styled.div<IDropdownContent>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;