module.exports = (state = {}, action) => {
  switch (action.type) {
    case 'VIP_DATA_REQUEST':
      return {
        ...state,
        fetching: true,
      };
    case 'VIP_DATA_RECEIVE':
      return {
        ...state,
        fetching: false,
        ...action.payload
      };
    case 'VIP_DATA_FAIL':
      return {
        ...state,
        fetching: false,
        ...action.error,
      };
    default:
      return state;
  }
};
