const React = require('react');
const { push } = require('react-router-redux');
const { connect } = require('react-redux');
const styles = require('./styles.css');

class Header extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      query: ''
    }
  }

  handleChange(evt){
    this.setState({
      query: evt.target.value
    })
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.push(`/listado?query=${this.state.query}`);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} action="/listado" method="GET">
        <input onChange={this.handleChange} name="query" value={this.state.query} type="text" />
        <input type="submit" value="submit" />
      </form>
    )
  }
}

module.exports = connect(null, {push})(Header);
