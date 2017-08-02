const React = require('react');
const { Link, Route } = require('react-router-dom');
const { connect } = require('react-redux');
const actions = require('./actions');
const qs = require('qs');

class Vip extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getInitialData(this.props.match, qs.parse(this.props.location.search.substr(1)));
  }

  render() {
    return (
      <div>
        <h3>soy vip</h3>
        <ul>
          <li><Link to="/item/me">Measdsdasdasdasdsadas</Link></li>
        </ul>
        {this.props.routes.map(route => <Route key={route.path} {...route}/>)}
      </div>

    )
  }
}


const mapStateToProps = (state, ownProps) => ({
  appData: state.appData,
  vip: state.vip
});

module.exports = connect(mapStateToProps, actions)(Vip);
