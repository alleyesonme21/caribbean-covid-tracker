import React from 'react';
import PropTypes from 'prop-types';
import jamaica from './../img/Jamaica-flag.jpeg';
import bahamas from './../img/Bahamas-flag.jpg';
import puerto from './../img/puerto-rico-flag.jpg';
import aruba from './../img/Aruba-flag.jpg';
import trinidad from './../img/Trinidad-flag.jpg';
import haiti from './../img/Haiti-flag.png';
import {useState} from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,  Row, Col,  } from 'react-bootstrap';

function Countryfirestore(props) {

  const [filteredCountries, setFilteredCountries] = useState(props.countries.countries);

  let jamaica1 = props.countries.countries.filter(countries => countries.countryName === "Jamaica");

  let bahamas1 = props.countries.countries.filter(countries => countries.countryName === "Bahamas");

  let aruba1 = props.countries.countries.filter(countries => countries.countryName === "Aruba");

  let trinidad1 = props.countries.countries.filter(countries => countries.countryName === "Trinidad and Tobago");

  let puertoRico1 = props.countries.countries.filter(countries => countries.countryName === "Puerto Rico");
  let haiti1 = props.countries.countries.filter(countries => countries.countryName === "Haiti");
  
  function showJamaica() {
    setFilteredCountries(jamaica1);
  };

  function showBahama() {
    setFilteredCountries(bahamas1);
  };
  function showAruba() {
    setFilteredCountries(aruba1);
  };

  function showTrinadad() {
    setFilteredCountries(trinidad1);
  };

  function showPuerto() {
    setFilteredCountries(puertoRico1);
  };

  function showHaiti() {
    setFilteredCountries(haiti1);
  };

  function showAll() {
    setFilteredCountries(props.countries.countries);
  };

  return (
    <Container>
      <Row> 
      <Col xs={12} md={8}>

<div className="clearfix">
    <div className="img-container p-1">
      <img  onClick={() => showBahama()}  src={bahamas}  alt="Bahamas"  /> 
    </div>
    <div className="img-container p1">
      <img onClick={() => showJamaica()} src={jamaica} alt="Jamaica"/>
    </div>
    <div className="img-container p-1">
      <img onClick={() => showTrinadad()} src={trinidad} alt="Trinidad"/>
    </div>
    <div className="img-container p-1">
      <img onClick={() => showAruba()}  src={aruba}  alt="Aruba" style={{width:'100%'}}/> 
    </div>
    <div className="img-container p-1">
      <img onClick={() => showPuerto()} src={puerto} alt="Puerto Rico" style={{width:'100%'}}/>
    </div>
    <div className="img-container p-1">
      <img onClick={() => showHaiti()} src={haiti} alt="Haiti" style={{width:'100%'}}/>
    </div>
</div>
</Col>
<Col className='text-column' xs={6} md={4}>  

      <div className="filterByCountry">
        
        <button className = "btn btn-info " onClick={() => showAll()}>See all Countries</button>
      </div>

      <ul className="center-align">

        {filteredCountries.map((country, index) =>

          <div key={index} className="side">
            
              <li>
                  <p><strong>{country.countryName}</strong> </p>
                  <p><strong>Reopening Details:</strong> {country.openDetails}</p>
                  <p><strong>Reopening Date:</strong> {country.openDate}</p>
                  <p><strong>Pre-Arrival:</strong> {country.preArrival}</p>
                  <p><strong>Quarantine Rules:</strong> {country.quarantine}</p>
                  <p><strong>Rules for Positive Tests:</strong> {country.positiveTest}</p>
              </li>
            </div>
        )}
      </ul>
      </Col>
      </Row>
    </Container>
  );
}

Countryfirestore.propTypes = {
  countries: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.string
}
export default Countryfirestore;