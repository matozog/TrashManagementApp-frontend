import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './components/pages/LoginPage/LoginPage';
import HomePage from './components/pages/HomePage/HomePage';

class App extends Component {
  render() {
    return (
       <Switch>
         <Route exact path={"/"} component={LoginPage} />
         <Route exact path={"/login"} component={LoginPage} />
         <Route exact path="/home" component={HomePage} />
      </Switch>
    );
  }
}

export default App;
