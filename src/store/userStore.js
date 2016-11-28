import {observable, computed, reaction} from 'mobx';
import UserModel from '../models/UserModel'

export default class UserStore {
  @observable userInfo = {};

  // subscribeServerToStore() {
  //   reaction(
  //     () => this.toJS(),
  //     todos => fetch('/api/todos', {
  //       method: 'post',
  //       body: JSON.stringify({ todos }),
  //       headers: new Headers({ 'Content-Type': 'application/json' })
  //     })
  //   );
  // }

  toJS() {
    return this.userInfo.toJS();
  }

  static fromJS(object) {
    const userStore = new UserStore();
    userStore.userInfo = UserModel.fromJS(object);
    return userStore;
  }
}
