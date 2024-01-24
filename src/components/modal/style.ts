import { styled } from 'styled-components';

export const ModalWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: transparent;
display: flex;
align-items: center;
justify-content: center;
`;

export const ModalBox = styled.div`
background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  min-width:400px;
  min-height:80px;
  margin: 32px;
  max-height: calc(100% - 64px);
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items:space-between;
  border-radius: 4px;
  box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

