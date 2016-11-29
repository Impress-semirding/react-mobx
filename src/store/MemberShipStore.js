import {observable, computed, reaction} from 'mobx';
import MemberShipModel from '../models/MemberShipModel'

export default class MemberShipStore {
  @observable MemberShip = [];
  @observable MemberShipStore = [];

  mapStore(key) {
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


