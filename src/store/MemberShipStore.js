import {observable, computed, reaction} from 'mobx';
import MemberShipModel from '../models/MemberShipModel'

export default class MemberShipStore {
  @observable MemberShip = [];
  @observable MemberShipStore = [];

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
  mapConstructor(Array) {

  }

  getByKey(key) {
    return this[key].map(ship => ship.toJS());
  }

  toJS() {
    return this.MemberShipStore.map(ship => ship.toJS());
  }

  static fromJS(array, role) {
    const memberShipStore = new MemberShipStore();
    memberShipStore.MemberShip = array.map(value => new MemberShipModel(value));
    memberShipStore.MemberShipStore = memberShipStore.MemberShip.filter((value) => {
      return role >= value.toJS().role;
    })
    return memberShipStore;
  }
}
