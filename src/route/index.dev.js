import App from '../components/app/App.jsx';
import { injectAsyncReducer } from '../store';
import AppState from './../components/app/AppState';

const Index = {
  path: 'index',
  component: App,
  onEnter: () => {
    const appState = new AppState();
    injectAsyncReducer('asycn', appState);
  }
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
