import styled from 'styled-components';

export const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 40px;
  background: #333;

  .logo {
    width: 20%;
    text-align: center;
    img {
      height: 30px;
    }
  }

  h1 {
    width: 20%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
  }
`;
