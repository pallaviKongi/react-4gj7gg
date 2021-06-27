const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        loading: false,
        error: false,
        catDetails: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
