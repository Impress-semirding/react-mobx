import mobx, { observable } from 'mobx';

export default class MemberShipModel {

  @observable ship = {};

  constructor(opt = {}) {
    this.ship = opt;
  }

  toJS() {
    return mobx.toJS(this.ship);
  }

  resetShip(userRole, array) {

  }

  destroy() {
  }
}
