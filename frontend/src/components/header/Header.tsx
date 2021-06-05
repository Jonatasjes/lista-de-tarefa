import React from 'react';

import logo from '../../assets/images/logo.png';
import Navigation from '../navigation/Navgation';
import { HeaderDiv } from './HeaderDiv';

const Header = (): JSX.Element => {
  return (
    <HeaderDiv>
      <div className="logo">
        <img src={logo} alt="DEVJes" />
      </div>
      <h1>Lista de Tarefas</h1>
      <Navigation />
    </HeaderDiv>
  );
};

export default Header;
