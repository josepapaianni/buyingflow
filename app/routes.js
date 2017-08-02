if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);
const React = require('react');

const AsyncRoute = require('./components/async-route');
const loadDataVip = require('./vip/actions').getInitialData;
const loadDataSearch = require('./search/actions').getInitialData;

let Home, Search, Vip, VipDetail;

if (process.env.BROWSER) {
  // This strange way to declare the route's components is required
  // because you need to resolve the dependency in a synchronous way to match
  // the app rendered in the server with the app rendered in the client.
  // You return a component instead of a promise if the chunk is already loaded
  Home = () => __webpack_modules__[require.resolveWeak('./home')] ? __webpack_require__(require.resolveWeak('./home')) :
    new Promise(resolve => require.ensure([], require => resolve(require('./home')), null, 'home'));
  Search = () => __webpack_modules__[require.resolveWeak('./search')] ? __webpack_require__(require.resolveWeak('./search')) :
    new Promise(resolve => require.ensure([], require => resolve(require('./search')), null, 'search'));
  Vip = () => __webpack_modules__[require.resolveWeak('./vip')] ? __webpack_require__(require.resolveWeak('./vip')) :
    new Promise(resolve => require.ensure([], require => resolve(require('./vip')), null, 'vip'));
  VipDetail = () => __webpack_modules__[require.resolveWeak('./vip/detail')] ? __webpack_require__(require.resolveWeak('./vip/detail')) :
    new Promise(resolve => require.ensure([], require => resolve(require('./vip/detail')), null, 'detail'));
} else {
  Home = () => require('./home');
  Search = () => require('./search');
  Vip = () => require('./vip');
  VipDetail = () => require('./vip/detail');
}


const routes = [
  {
    path: '/',
    chunkName: 'home',
    exact: true,
    render: (subroutes, props) => <AsyncRoute routes={subroutes} component={Home()} {...props} />,
    loadData: () => console.log('aalalala'),
  },
  {
    path: '/listado',
    chunkName: 'search',
    loadData: loadDataSearch,
    render: (subroutes, props) => <AsyncRoute routes={subroutes} component={Search()} {...props} />,
  },
  {
    path: '/item/:id',
    chunkName: 'vip',
    loadData: loadDataVip,
    render: (subroutes, props) => <AsyncRoute routes={subroutes} component={Vip()} {...props} />,
    routes: [
      {
        path: '/item/me',
        chunkName: 'detail',
        render: (subroutes, props) => <AsyncRoute routes={subroutes} component={VipDetail()} {...props} />,
        loadData: () => console.log('me')
      }
    ]
  },
];

module.exports = routes;
