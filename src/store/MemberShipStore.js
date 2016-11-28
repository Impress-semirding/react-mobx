import {observable, computed, reaction} from 'mobx';
import MemberShipModel from '../models/MemberShipModel'

export default class MemberShipStore {
  @observable MemberShip = [];

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

  toJS() {
    return this.MemberShip.map(ship => ship.toJS());
  }

  static fromJS(array) {
    const memberShipStore = new MemberShipStore();
    memberShipStore.MemberShip = array.map(value => new MemberShipModel(value));

    return memberShipStore;
  }
}
