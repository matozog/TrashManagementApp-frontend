import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import LoginPage from './components/pages/LoginPage/LoginPage';
import HomePage from './components/pages/HomePage/HomePage';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#455A64'
    },
    secondary: {
      main: '#0044ff'
    },

    background: {
      default: '#eeeeee'
    }
  }
});

class App extends Component {
  render() {
    return (
    <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
