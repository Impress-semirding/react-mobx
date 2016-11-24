import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@inject('store') @observer
class App extends Component {
  onReset = () => {
    this.props.store.asycn.resetTimer();
  }
  render() {
    const { asycn } = this.props.store;
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds: {asycn.timer}
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
