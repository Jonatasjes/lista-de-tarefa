import styled from 'styled-components';

export const InputSearchTaskDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 30px;
    border: none;
    background: #f7f7f7;
    padding: 0 10px;
    border-radius: 3px;
    font-size: 1rem;
    line-height: 30px;
  }

  svg {
    position: absolute;
    width: 22px;
    height: 22px;
    color: #c1c1c1;
    right: 5px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;
