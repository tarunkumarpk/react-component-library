import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
`;

const CheckBoxWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Box = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${({ color }) => color || "#eee"};
`;

export { Wrapper, CheckBoxWrapper, Box };
