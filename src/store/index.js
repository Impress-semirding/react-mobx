import { RouterStore } from 'mobx-react-router';
import UserStore from './userStore';
import MemberShipStore from './MemberShipStore';
//  test case
import { memberShip } from './../accessConfig/memberShip';
import {Atom, autorun} from "mobx";

// this.userId = opt.id;
// this.nickname = opt.nickname;
// this.avatar = opt.avatar;
const userStore = UserStore.fromJS({
  userId: 'dhsohwoeh739237',
  nickname: 'dingxue',
  avatar: 'http://img.alicdn.com/tps/TB13Od5LpXXXXX_XXXXXXXXXXXX-150-50.png',
  role: 2
});


// 2 is role code
const memberShipStore = MemberShipStore.fromJS(memberShip, 2);

const disposer = autorun(() => console.log(memberShipStore.toJS()));

export const routingStore = new RouterStore();
const stores = {
  // AppState: new AppState(),
  // Key can be whatever you want
  routing: new RouterStore(),
  userStore: userStore,
  memberShipStore: memberShipStore
  // ...other stores
};

export function injectAsyncReducer(name, singleStore) {
  stores[name] = singleStore;
}

export default stores;
