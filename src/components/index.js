import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router';
import { Provider, observer } from 'mobx-react'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import DevTools from 'mobx-react-devtools';
import AppState from './app/AppState';
import Index from './app/App.jsx';
import createRoute from '../route';
// const appState = new AppState();
const routingStore = new RouterStore();
const stores = {
  AppState: new AppState(),
  // Key can be whatever you want
  routing: routingStore,
  // ...other stores
};
//<Router history={history} routes={createRoute} />
const history = syncHistoryWithStore(browserHistory, routingStore)

class App extends Component {
  render() {
    return (
      <Provider store={stores}>
        <Router history={history} routes={createRoute} />
      </Provider>
    );
  }
};

export default App;
