const React = require('react');
const ReactDOM = require('react-dom');
const { AppContainer } = require('react-hot-loader');
const { ConnectedRouter } = require('react-router-redux');
const createHistory = require('history/createBrowserHistory').default;
const { Provider } = require('react-redux');
const App = require('../app');
const history = createHistory();
const Store = require('./store')(history);

ReactDOM.render(
  <AppContainer>
    <Provider store={Store} >
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
      </Provider>
  </AppContainer>,
  document.getElementById('root')
);

//Test SW
navigator.serviceWorker.register('/sw.js').then(() => {
  console.log('service worker ok!')
});

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('../app', () => {
    const NextApp = require('../app');
    ReactDOM.render(
      <AppContainer>
        <Provider store={Store} >
          <ConnectedRouter history={history}>
            <NextApp/>
          </ConnectedRouter>
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
