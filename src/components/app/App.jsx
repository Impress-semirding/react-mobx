import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@inject('store') @observer
class App extends Component {
  onReset = () => {
    this.props.store.AppState.resetTimer();
  }
  render() {
    const { AppState } = this.props.store;
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds  -ha: {AppState.timer}
        </button>
        <DevTools />
      </div>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object.isRequired
};

export default App;
