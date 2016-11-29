import React, { PureComponent } from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';

class DropdownList extends PureComponent {
  render() {
    return (
      <Dropdown overlay={menu}>
        <Button type="ghost" style={{ marginLeft: 8 }}>
          Button <Icon type="down" />
        </Button>
      </Dropdown>
    );
  }
}

DropdownList.wrappedComponent.propTypes = {
  dropdownList: React.PropTypes.array.isRequired,
  mode: React.PropTypes.bool  //  dropdown组建的水平显示，亦或是垂直显示
};

export default DropdownList;
