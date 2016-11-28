import App from '../commons/head';
import { injectAsyncReducer } from '../store';
import AppState from './../components/app/AppState';

const Index = {
  path: 'index',
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      const appState = new AppState();
      injectAsyncReducer('asycn', appState);
      cb(null, require('../components/app/App.jsx').default);
    }, 'index');
  },
};

const route = [
  {
    path: '/',
    component: App,
    childRoutes: [
      Index,
    ]
  }
];

export default route;
