const React = require('react');
const { Link, withRouter } = require('react-router-dom');
const styles = require('./styles.css');
const SearchField = require('./search-field');

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <header className={styles.container}>
        <nav>
          <SearchField />
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

module.exports = Header;
