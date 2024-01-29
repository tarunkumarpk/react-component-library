import styled, { css } from "styled-components";
interface TextProps {
  placement: "top" | "right" | "left" | "bottom";
  arrow: boolean;
}
export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  &:hover .tooltiptext {
    visibility: visible;
  }
`;

export const Text = styled.span<TextProps>`
  visibility: hidden;
  width: 120px;
  background-color: grey;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  ${({ placement }) =>
    placement === "top" &&
    css`
      width: 120px;
      bottom: 100%;
      left: 50%;
      margin-left: -60px;
    `}
  ${({ placement }) =>
    placement === "bottom" &&
    css`
      width: 120px;
      top: 100%;
      left: 50%;
      margin-left: -60px;
    `}
  ${({ placement }) =>
    placement === "right" &&
    css`
      top: -5px;
      left: 105%;
    `}
  ${({ placement }) =>
    placement === "left" &&
    css`
      top: -5px;
      right: 105%;
    `}

    ${({ arrow, placement }) =>
    arrow &&
    placement === "top" &&
    css`
      &::after {
        content: " ";
        position: absolute;
        top: 100%; /* At the bottom of the tooltip */
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
      }
    `}

    ${({ arrow, placement }) =>
    arrow &&
    placement === "bottom" &&
    css`
      &::after {
        content: " ";
        position: absolute;
        bottom: 100%; /* At the top of the tooltip */
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent black transparent;
      }
    `}
    ${({ arrow, placement }) =>
    arrow &&
    placement === "right" &&
    css`
      &::after {
        content: " ";
        position: absolute;
        top: 50%;
        right: 100%; /* To the left of the tooltip */
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent grey transparent transparent;
      }
    `}
    ${({ arrow, placement }) =>
    arrow &&
    placement === "left" &&
    css`
      &::after {
        content: " ";
        position: absolute;
        top: 50%;
        left: 100%; /* To the right of the tooltip */
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent transparent grey;
      }
    `}
`;
