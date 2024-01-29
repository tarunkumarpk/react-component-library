import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
`;

const RadioWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Circle = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${({ color }) => color || "#eee"};
`;

export { Wrapper, RadioWrapper, Circle };
