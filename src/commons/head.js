import React, { PureComponent } from 'react';
import { Button } from 'antd';
require('./appStyle.scss');

class App extends PureComponent {
  render() {
    //  通过key强制更新公用的菜单
    return (
      <div className="App">
        <div className="g-head">
          <strong className="m-title"><span>客服系统</span></strong>
          <Button className="f-margin" size="large" type="primary">人员管理</Button>
          <Button className="f-margin" type="primary">客户管理</Button>
          <Button className="f-margin" type="primary">部门管理</Button>
          <Button className="f-margin" type="primary">信息管理</Button>
          <Button className="f-margin f-float" type="primary">管理员</Button>
          <Button className="f-margin f-float" type="primary">退出</Button>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
