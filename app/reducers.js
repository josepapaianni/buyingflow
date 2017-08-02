const { combineReducers } = require('redux');
const { routerReducer } = require('react-router-redux');
const searchReducer = require('./search/reducer');
const vipReducer = require('./vip/reducer');

const combinedReducers = combineReducers({
  appData: (state = {}) => state,
  router: routerReducer,
  search: searchReducer,
  vip: vipReducer,
});

module.exports = combinedReducers;
