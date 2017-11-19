import React, { Component } from 'react';
import './App.css';
import { addListener, removeListener, isAuthorized } from './AuthorizeApi';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import Public from './Public';
import Auth from './Auth';

class App extends Component {
  state = {
    isAuthorized: false
  };

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({ isAuthorized });
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/public">Публичная страница</Link>
          </li>
          <li>
            <Link to="/auth">Войти</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route exact path="/public" component={Public} />
        <Route exact path="/auth" component={Auth} />
      </div>
    );
  }
}

export default App;
