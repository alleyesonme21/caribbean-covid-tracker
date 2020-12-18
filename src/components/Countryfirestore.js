import React from 'react';
import PropTypes from 'prop-types';
import Haiti from './../img/Haiti-flag.png';
import Jamaica from './../img/Jamaica-flag.jpeg';
import {useState} from 'react';

function Countryfirestore(props) {

  function checkCountry(countries) {
    if (countries === "Haiti") {
      return <img className="haiti" src={Haiti} alt="flag" />
    } else {
      return <img className="jamaica" src={Jamaica} alt="flag" />;
    }
  }

  const [filteredCountries, setFilteredCountries] = useState(props.countries.countries);

  let countries = props.countries.countries.filter(countries => countries.country === "Haiti");
  let cases = props.countries.countries.filter(countries => countries.cases === "");
  let details = props.countries.countries.filter(countries => countries.details === "");
  let date= props.countries.countries.filter(countries => countries.date === "");
  // let arrival= props.countries.countries.filter();
  // let testing= props.countries.countries.filter();
  // let quarantine= props.countries.countries.filter();
  // let positivity= props.countries.countries.filter();
  
  function showCountry() {
    setFilteredCountries(countries);
  };

  function showCases() {
    setFilteredCountries(cases);
  };
  function showDetails() {
    setFilteredCountries(details);
  };

  function showDate() {
    setFilteredCountries(date);
  };

  function showArrival() {
    setFilteredCountries(arrival);
  };
  function showTesting() {
    setFilteredCountries(testing);
  };
  function showQuarantine() {
    setFilteredCountries(quarantine);
  };
  function showPositivity() {
    setFilteredCountries(positivity);
  };

  function showAllCountry() {
    setFilteredCountries();
  }

  return (

    <React.Fragment>
      <h1>Lists</h1>
      <div className="filterByCountry">
        <h4>Filter</h4>
        <button  onClick={() => showCountry()}>Country</button>                     
        <button  onClick={() => showDate()}>Reopening-Date</button>
        <button  onClick={() => showCases()}>Cases</button>
        <button  onClick={() => showDetails()}>Reopening-Details</button>
        <button  onClick={() => showArrival()}>Prearrival-Requirements</button>
        <button  onClick={() => showTesting()}>Testing-Requirements</button>
        <button  onClick={() => showQuarantine()}>Quarantine-Requirements</button>
        <button  onClick={() => showPositivity()}>Positivity-Requirements</button>
      </div>

      <ul className="center-align">

        {filteredCountries.map((country, index) =>
        
          <div key={index}>
            <div>
              <div>
                {checkCountry(country.country)}
              </div>
              <li>
                <div>
                  <h3>Name: {country.name}</h3>
                  <p><strong>Country:</strong> {country.country}</p>
                  <p><strong>Cases:</strong> {country.cases}</p>
                  <p><strong>Details:</strong> {country.details}</p>
                  <p><strong>Date:</strong> {country.date}</p>
                  <button onClick={() => props.whenAdoptClicked(props.index)}>see!</button>
                </div>
              </li>
            </div>
          </div>
        )}
      </ul>
    </React.Fragment>
  );
}

Countryfirestore.propTypes = {
  countries: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.string
}

export default Countryfirestore;