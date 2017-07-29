const React = require('react');
const { Switch, Route, Link } = require('react-router-dom');
const routes = require('./routes');

const App = () => (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/listado">Search</Link></li>
          <li><Link to="/item/MLA639408042">Vip</Link></li>
        </ul>
      </nav>
      <Switch>
        {routes.map(route => <Route key={route.path} path={route.path} exact={route.exact} render={route.render.bind(null, route.routes)} />)}
      </Switch>
    </div>
  );

module.exports = App;