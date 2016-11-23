import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@inject("store") @observer
class App extends Component {
  render() {
    const { AppState } = this.props.store;
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds passeddhskdhs: {AppState.timer}
        </button>
        <DevTools />
      </div>
    );
  }

  onReset = () => {
    this.props.store.AppState.resetTimer();
  }
};

export default App;