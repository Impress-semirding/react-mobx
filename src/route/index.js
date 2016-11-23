const Index = {
  path: 'index',
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      cb(null, require('../components/app/App.jsx').default);
    }, 'index');
  },
};

const route = [
  {
    path: '/',
    childRoutes: [
      Index,
    ]
  }
];

export default route;
