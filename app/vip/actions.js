const { getItemById } = require('../services');

function requestData() {
  return {
    type: 'VIP_DATA_REQUEST',
  };
}

function requestDataOk(payload) {
  return {
    type: 'VIP_DATA_RECEIVE',
    payload
  };
}

function requestDataFail(error) {
  return {
    type: 'VIP_DATA_FAIL',
    error
  };
}

const getInitialData = (match, query) => (dispatch, getState) => {
  if (getState().vip.id === match.params.id) return;
  dispatch(requestData());
  return new Promise(resolve => {
    getItemById(match.params.id)
      .then(response => resolve(dispatch(requestDataOk(response.data))))
      .catch(error => resolve(dispatch(requestDataFail(error.response.data))));
  })
};

module.exports.getInitialData = getInitialData;
