import React, { Component, propTypes } from 'react';
import { Table, Icon } from 'antd';

export default class EmployeeTable extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { dataSource, columns } = this.props;
    return (
      <Table columns={columns} dataSource={dataSource} />
    )
  }
}

EmployeeTable.propTypes = {
  dataSource: React.PropTypes.array.isRequired
};
