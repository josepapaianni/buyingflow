const React = require('react');
const { Switch, Route, withRouter } = require('react-router-dom');
const Header = require('./components/header');
const routes = require('./routes');
const styles = require('./styles.css');
const qs = require('qs');

const getQParams = url => {
      const queryStart = url.indexOf('?')+1;
      const queryParams = url.slice(queryStart);
      
      return qs.parse(queryParams);
  };

const App = props => {
  return (
    <div className={styles.container}>
      <Header/>
      <Switch>
        {
          routes.map(route => 
          <Route 
            key={route.path} 
            path={route.path} 
            exact={route.exact} 
            render={route.render.bind(null, {routes: route.routes, queryParams: getQParams(props.location.search)} )} 
          />
        )}
      </Switch>
    </div>
  )};

module.exports = withRouter(App);
