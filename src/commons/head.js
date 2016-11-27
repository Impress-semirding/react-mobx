import React, { PureComponent } from 'react';
require('./appStyle.scss');

class App extends PureComponent {
  render() {
    //  通过key强制更新公用的菜单
    return (
      <div className="App">
        Header.js
        {this.props.children}
      </div>
    );
  }
}

export default App;
