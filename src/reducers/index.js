import countriesVisibleReducer from './countries-visible-reducer';
import homeVisibleReducer from './home-visible-reducer';
import countriesReducer from './countries-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  countryShowing: countriesVisibleReducer,
  homeShowing: homeVisibleReducer,
  countries: countriesReducer
});

export default rootReducer;