const { createStore, compose, applyMiddleware } = require('redux');
const { routerMiddleware } = require('react-router-redux');
const thunk = require('redux-thunk').default;
const reducers = require('../app/reducers');

module.exports = history => {

  const preloadedState = window.__PRELOADED_STATE__ ? window.__PRELOADED_STATE__ : {};

  window.__PRELOADED_STATE__ ? delete window.__PRELOADED_STATE__ : null;

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(reducers, preloadedState,
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))));

  if(module.hot) {
    module.hot.accept('../app/reducers', () =>
      store.replaceReducer(require('../app/reducers'))
    );
  }

  return store;

};
