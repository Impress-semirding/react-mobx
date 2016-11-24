import App from '../components/app/App.jsx';
import { injectAsyncReducer } from '../store';
import AppState from './../components/app/AppState';

const Index = {
  path: 'index',
  getComponent: (nextState, cb) => {
    const appState = new AppState();
    injectAsyncReducer('asycn', appState);
    cb(null, App);
  },
};

const route = [
  {
    path: '/',
    childRoutes: [
      Index,
    ]
  }
];

export default route;
