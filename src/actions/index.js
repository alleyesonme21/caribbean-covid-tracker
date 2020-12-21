import * as c from './ActionTypes';

export const requestCountries = () => ({
  type: c.REQUEST_COUNTRIES
});
export const getCountriesSuccess = (countries) => ({
  type: c.GET_COUNTRIES_SUCCESS,
  countries
});
export const getCountriesFailure = (error) => ({
  type: c.GET_COUNTRIES_FAILURE,
  error
});

export const toggleCountryShowing = () => ({
  type: c.TOGGLE_COUNTRY_SHOWING
});

export const toggleHomeShowing = () => ({
  type: c.TOGGLE_HOME_SHOWING
});


export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestCountries);
    return fetch(`http://localhost:5000/api/countries`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        dispatch(getCountriesSuccess(jsonifiedResponse));
      })
      .catch((error) => {
        dispatch(getCountriesFailure(error));
      });
  }
}