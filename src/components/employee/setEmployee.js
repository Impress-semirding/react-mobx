import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router';
import QiniuImageUpload from "./../../commons/qiniuimageupload.jsx";


@inject('store') @observer
export default class SetEmployee extends Component {
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
    return (
      <div>
        SetEmployee
        <Link to="/employee">employee</Link>
        <QiniuImageUpload ref="imageUploadDialog" onUploadSuccessHandler={this._onImageUploadSuccessHandler}  /> 
      </div>
    )
  }
}