import React, { PureComponent } from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';
/*eslint-disable */
// import DevTools from 'mobx-react-devtools';
import createRoute from './route';
import stores, { routingStore } from './store';
import { fetchApi } from './actions/test';

//  <Router history={history} routes={createRoute} />
const history = syncHistoryWithStore(browserHistory, routingStore);

class App extends PureComponent {
  componentWillMount() {
    fetchApi();
  }
  render() {
    return (
      <Provider store={stores}>
        <Router history={history} routes={createRoute} />
      </Provider>
    );
  }
}

export default App;
