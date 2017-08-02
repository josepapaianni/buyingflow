const React = require('react');
const { Switch, Route } = require('react-router-dom');
const Header = require('./components/header');
const routes = require('./routes');
const styles = require('./styles.css');

const App = () => (
    <div className={styles.container}>
      <Header/>
      <Switch>
        {routes.map(route => <Route key={route.path} path={route.path} exact={route.exact} render={route.render.bind(null, route.routes)} />)}
      </Switch>
    </div>
  );

module.exports = App;