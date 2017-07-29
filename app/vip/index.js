const React = require('react');
// const { bindActionCreators } = require('redux');
const { Link, Route } = require('react-router-dom');
const { connect } = require('react-redux');
const actions = require('./actions');

class Vip extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getInitialData(this.props.location);
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
  location: ownProps.match,
  vip: state.vip
});

// const mapDispatchToProps = dispatch => ({
//   getInitialData: bindActionCreators(getInitialData, dispatch),
// });

module.exports = connect(mapStateToProps, actions)(Vip);
