import React, { Component } from 'react';
import { Menu, Dropdown, Button, Table, Icon, message } from 'antd';
import { resource, employee, resourceClomn } from '../../accessConfig/resource';
import EmployeeTable from './table';


export default class Resource extends Component {

  render() {
    return (
      <div>
        <EmployeeTable columns={resourceClomn} dataSource={resource}/>
      </div>
    )
  }
}

Resource.propTypes = {
};