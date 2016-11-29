import React, { PureComponent, propTypes } from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';

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

class DropdownList extends PureComponent {
  renderMenu(menus) {
    return () => {
    
      return <Menu onClick={handleMenuClick}>
        {
          menus.map((menu) => {
            return <Menu.Item key={menu.id}>{menu.name}</Menu.Item>
          })
        }
        </Menu>
    }
  }
  renderMenuTest() {

    return (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3d menu item</Menu.Item>
      </Menu>
    )
  }
  render() {
    const { dropdownList, mode } = this.props;
    return (
      <div>
        {
          dropdownList.map((item) => {
            return !mode ?
              <div>
                <Dropdown overlay={this.renderMenu(item.value)()}>
                  <Button type="ghost" style={{ marginLeft: 8 }}>
                    {item.name} <Icon type="down" />
                  </Button>
                </Dropdown>
              </div>
              : 
              <Dropdown overlay={this.renderMenu(item.value)()}>
                <Button type="ghost" style={{ marginLeft: 8 }}>
                  {item.name} <Icon type="down" />
                </Button>
              </Dropdown>
          })
        }
      </div>
    )
  }
}

DropdownList.propTypes = {
  dropdownList: React.PropTypes.array.isRequired,
  mode: React.PropTypes.bool,  //  dropdown组建的水平显示，亦或是垂直显示
  // marginLeft : React.PropTypes.string,
  // marginTop : React.PropTypes.string,
};

export default DropdownList;
