import { CSSProperties } from "styled-components";
import { ModalBox, ModalWrapper } from "./style";
import Button from "@/components/button";
interface ModelProps {
  title: string | JSX.Element;
  content: string | JSX.Element;
  actions?: string | JSX.Element;
  closeButton?: boolean;
  isOpen: boolean;
  onClose: () => void;
  style?: CSSProperties;
}
const Modal = ({
  isOpen,
  onClose,
  title,
  content,
  actions,
  closeButton,
}: ModelProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalBox>
        <h1>{title}</h1>
        <>{content}</>
        <div>
          {actions}
          {closeButton && <Button onClick={onClose} label="close" />}
        </div>
      </ModalBox>
    </ModalWrapper>
  );
};

export default Modal;
