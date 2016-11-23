import React, { PureComponent } from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import AppState from './components/app/AppState';
import createRoute from './route';
// const appState = new AppState();
const routingStore = new RouterStore();
//  这里可以通过require.ensure动态生成store
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
