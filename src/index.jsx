require("react-hot-loader/patch")
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router } from 'react-router';
import createRoute from './route';
import history from './history';
import App from './components';

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
);

// if (module.hot) {
//   module.hot.accept('./components', () => {
//     var NewApp = require('./components').default;
//     render(
//       <AppContainer>
//         <NewApp />
//       </AppContainer>,
//       document.getElementById('root')
//     );
//   });
// }
