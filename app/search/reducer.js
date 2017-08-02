module.exports = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_DATA_REQUEST':
      return {
        ...state,
        query: action.query,
        fetching: true,
      };
    case 'SEARCH_DATA_RECEIVE':
      return {
        ...state,
        fetching: false,
        ...action.payload
      };
    case 'SEARCH_DATA_FAIL':
      return {
        ...state,
        fetching: false,
        ...action.error,
      };
    default:
      return state;
  }
};
