import React, { Component } from 'react';
import App from './App.jsx';
import AppState from './AppState';
const appState = new AppState();

class AppWrapper extends Component {
  render() {
    return (
      <App appState={appState} />
    );
  }
};

export default AppWrapper;
