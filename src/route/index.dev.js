import Main from '../components/app/App.jsx';
import { injectAsyncReducer } from '../store';
import AppState from './../components/app/AppState';
import App from '../commons/head';

const Index = {
  path: 'index',
  component: Main,
  onEnter: () => {
    const appState = new AppState();
    injectAsyncReducer('asycn', appState);
  }
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
