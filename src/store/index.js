import { RouterStore } from 'mobx-react-router';

export const routingStore = new RouterStore();
const stores = {
  // AppState: new AppState(),
  // Key can be whatever you want
  routing: new RouterStore(),
  // ...other stores
};

export function injectAsyncReducer(name, singleStore) {
  stores[name] = singleStore;
}

export default stores;
