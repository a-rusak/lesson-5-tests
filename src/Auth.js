import React, { Component } from 'react';
import { authorizeUser } from './AuthorizeApi';

class Auth extends Component {
  handleSubmit = evt => {
    const { email, password } = evt.target;
    authorizeUser(email, password);
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Логин</legend>
          <input type="text" name="email" />
          <input type="password" name="password" />
          <button onClick={this.handleSubmit}>Войти</button>
        </fieldset>
      </form>
    );
  }
}

export default Auth;
