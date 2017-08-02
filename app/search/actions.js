const { searchByTerm } = require('../services');

function requestData(query) {
  return {
    type: 'SEARCH_DATA_REQUEST',
    query
  };
}

function requestDataOk(payload) {
  return {
    type: 'SEARCH_DATA_RECEIVE',
    payload
  };
}

function requestDataFail(error) {
  return {
    type: 'SEARCH_DATA_FAIL',
    error
  };
}

const getInitialData = (match, query) => (dispatch, getState) => {
  if (getState().search.query === query.query || getState().search.fetching) return;
  dispatch(requestData(query.query));
  return new Promise(resolve => {
    searchByTerm(query.query)
      .then(response => resolve(dispatch(requestDataOk(response.data))))
      .catch(error => resolve(dispatch(requestDataFail(error.response.data))));
  })
};

module.exports.getInitialData = getInitialData;
