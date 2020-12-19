import React from 'react';
import Countryfirestore from './Countryfirestore';
import Home from './Home';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from '../actions';
import { makeApiCall } from '../actions';

class MainControl extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log("Handle click reached");
    const { dispatch } = this.props;
    const action = a.toggleCountryShowing();
    dispatch(action);
    const action2 = a.toggleHomeShowing();
    dispatch(action2);
    }

    componentDidMount() {
      const { dispatch } = this.props;
      dispatch(makeApiCall());
    }
    
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.countryShowing) {
      currentlyVisibleState = <Countryfirestore callApi={this.props.countryfirestore} countries={this.props.countries}/>  
      buttonText = "Return to Home";
    } else {
      currentlyVisibleState = <Home />
      buttonText = "View Countries";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-outline-dark" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
  
MainControl.propTypes = {
    countryShowing: PropTypes.bool,
    homeShowing: PropTypes.bool,
    countries: PropTypes.object
  };

  const mapStateToProps = state => {
    return {
      countryShowing: state.countryShowing,
      homeShowing: state.homeShowing,
      countries: state.countries,
    }
  }

MainControl = connect(mapStateToProps)(MainControl);

export default MainControl;