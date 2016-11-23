require("react-hot-loader/patch")
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './provider';

render(
    <App />,
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
