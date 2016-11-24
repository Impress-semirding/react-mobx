import React, { PureComponent } from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
/*eslint-disable */
import DevTools from 'mobx-react-devtools';
import AppState from './components/app/AppState';
//  当前语句解决require.ensure 的热加载问题，也可以在源头处解决
/*eslint-disable */
import Index from './components/app/App.jsx';
import createRoute from './route';
// const appState = new AppState();
const routingStore = new RouterStore();
const stores = {
  AppState: new AppState(),
  // Key can be whatever you want
  routing: routingStore,
  // ...other stores
};
//  <Router history={history} routes={createRoute} />
const history = syncHistoryWithStore(browserHistory, routingStore);

class App extends PureComponent {
  render() {
    return (
      <Provider store={stores}>
        <Router history={history} routes={createRoute} />
      </Provider>
    );
  }
}

export default App;
