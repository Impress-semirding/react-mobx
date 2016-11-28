import Main from '../components/app/App.jsx';
import { injectAsyncReducer } from '../store';
import AppState from './../components/app/AppState';
import App from '../commons/head';
import Relation from '../components/relation';


const Index = {
  path: 'index',
  component: Main,
  onEnter: () => {
    const appState = new AppState();
    injectAsyncReducer('asycn', appState);
  }
};

const memberRelation = {
  path: 'relation',
  component: Relation,
}

const route = [
  {
    path: '/',
    component: App,
    childRoutes: [
      Index,
      memberRelation
    ]
  }
];

export default route;
