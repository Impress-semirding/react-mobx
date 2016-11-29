import React, { Component } from 'react';
import { Menu, Dropdown, Button, Table, Icon, message } from 'antd';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router';
import QiniuImageUpload from "./../../commons/qiniuimageupload.jsx";
import DropdownList from './../../commons/dropdown';




        // <QiniuImageUpload ref="imageUploadDialog" onUploadSuccessHandler={this._onImageUploadSuccessHandler}  /> 

@inject('store') @observer
export default class SetEmployee extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      current: '1',
    };
  }

  _onImageUploadSuccessHandler(data){
    var state = this.state;
    Collection.updatePic(this.props.params.collectionId,data.key,state.currentPicKey,{
      success:function(d){
        if(d.code === 0){
          var newCollection = this.self.state.collection;
          newCollection[this.self.state.currentPicKey] = this.key;
          this.self.setState({collection:newCollection})
          $.toaster({ priority : 'success', title : '', message : 'Upload Success!'});
        }else{
          $.toaster({ priority : 'warning', title : '', message : 'Save Fail!'});
        }
      }.bind({self:this,key:data.key})
    })
  }

  render() {
    const { memberShipStore } = this.props.store;
    return (
      <div>
        SetEmployee
        <Link to="/employee">employee</Link>
        <DropdownList dropdownList={memberShipStore.toJS()} mode={0} />
        
      </div>
    )
  }
}

SetEmployee.wrappedComponent.propTypes = {
  store: React.PropTypes.object.isRequired
};
