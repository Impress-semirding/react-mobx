// const Index = {
//   path: 'index',
//   getComponent: (nextState, cb) => {
//     require.ensure([], (require) => {
//       cb(null, require('../components/app/App.jsx').default);
//       //  hot-load
//       if (module.hot) {
//         module.hot.accept("../components/app/App.jsx", function() {
//           var newApp = require('../components/app/App.jsx').default;
//           cb(null, newApp);
//         // do something when x was updated
//         });
//       }
//     }, 'index');
//   },
// };

const Index = {
  path: 'index',
  getComponent: (nextState, cb) => {
    cb(null, require('../components/app/App.jsx').default);
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