import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import { inject, observer } from 'mobx-react';

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3d menu item</Menu.Item>
  </Menu>
);

@inject('store') @observer
export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      current: '1',
    };
  }
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div>
        <Dropdown overlay={menu}>
          <Button type="ghost" style={{ marginLeft: 8 }}>
            Button <Icon type="down" />
          </Button>
        </Dropdown>
      </div>
    )
  }
}