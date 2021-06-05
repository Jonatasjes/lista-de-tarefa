import React from 'react';
import { LoginSection } from '../styles/pages/Login';

const Login = (): JSX.Element => {
  return (
    <LoginSection className="login">
      <form>
        <fieldset>
          <legend>Login</legend>
          <p>
            <label htmlFor="name">Email</label>
            <input type="email" name="name" id="name" />
          </p>
          <p>
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" />
          </p>
          <button type="submit">Entrar</button>
        </fieldset>
      </form>
    </LoginSection>
  );
};

export default Login;
