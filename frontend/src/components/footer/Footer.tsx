import React from 'react';

import logo from '../../assets/images/logo.png';
import { FooterDiv } from './FooterDiv';

const Footer = (): JSX.Element => {
  return (
    <FooterDiv>
      <div className="logo">
        <img src={logo} alt="DEVJes" />
      </div>

      <span>
        <a href="http://devjes.com.br/" target="_blank">
          DevJES 2021
        </a>
        - Todos os direitos reservados.
      </span>
    </FooterDiv>
  );
};

export default Footer;
