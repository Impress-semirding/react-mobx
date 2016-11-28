import {observable} from 'mobx';

export default class UserModel {
  id;
  @observable nickname;
  @observable avatar;

  constructor(opt = {}) {
    this.userId = opt.userId;
    this.nickname = opt.nickname;
    this.avatar = opt.avatar;
    this.role = opt.role;
  }

  destroy() {
    this.store.todos.remove(this);
  }

  toJS() {
    return {
      userId: this.userId,
      nickname: this.nickname,
      avatar: this.avatar,
      role: this.role
    };
  }

  static fromJS(object) {
    return new UserModel(object);
  }
}
