const React = require('react');
const { Link } = require('react-router-dom');
const styles = require('./styles.css');

const Item = props => {
  return (
    <li className={styles.container}>
      <div className={styles.thumbnail}>
        <img src={props.thumbnail} />
      </div>
      <article className={styles.article}>
        <Link to={`/item/${props.id}`}>
          <h3>{props.title}</h3>
        </Link>
      </article>
      {/*<div className="clearfix" />*/}
    </li>
  );
};

module.exports = Item;