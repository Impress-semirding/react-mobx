require("react-hot-loader/patch")
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './provider';

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./provider', () => {
    var NewApp = require('./provider').default;
    render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
