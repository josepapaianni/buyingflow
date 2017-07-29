const { searchByTerm } = require('../services');

const fetchData = location => (dispatch, state) => {
  const query = location.query;
  return new Promise((resolve, reject) => {
    searchByTerm(query)
      .then(resolve)
      .catch(reject)
  });
};

module.exports = fetchData;
