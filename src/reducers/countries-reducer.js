import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  countries: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_COUNTRIES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_COUNTRIES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        countries: action.countries
      });
    case c.GET_COUNTRIES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};