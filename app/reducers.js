const { combineReducers } = require('redux');
const { routerReducer } = require('react-router-redux');
const vipReducer = require('./vip/reducer');

const combinedReducers = combineReducers({
  appData: (state = {}) => state,
  router: routerReducer,
  vip: vipReducer
});

module.exports = combinedReducers;
