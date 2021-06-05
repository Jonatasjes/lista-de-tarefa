import styled from 'styled-components';

export const FooterDiv = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 60px;
  background-color: #333;

  .logo {
    img {
      height: 30px;
    }
  }

  span {
    font-size: 1rem;
    color: #fff;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;
