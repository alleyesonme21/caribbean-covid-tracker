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
import { Container,  Row, Col, Carousel } from 'react-bootstrap';

function Countryfirestore(props) {

  // function checkCountry(countryName) {
  //   if (countryName === "Jamaica") {
  //     return <img className="jamPic" src={jamaica} alt="flag" />

  //   } else if (countryName === "Bahamas"){
  //     return <img className="bahPic" src={bahamas} alt="flag" />;

  //   } else if(countryName === "Aruba") {
  //     return <img className="aruPic" src={aruba} alt="flag" />

  //   } else if (countryName === "Puerto Rico") {
  //     return <img className="aruPic" src={puerto} alt="flag" />

  //   } else if (countryName === "Trinidad and Tobago") {
  //     return <img className="tripic" src={trinidad} alt="flag" />
  //   }
  // }

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
    <div className="img-container">
    <img onClick={() => showBahama()}  src={bahamas}  alt="Italy" style={{width:'100%'}}/> 
    </div>
    <div className="img-container">
    <img onClick={() => showJamaica()} src={jamaica} alt="Forest" style={{width:'100%'}}/>
    </div>
    <div className="img-container">
    <img onClick={() => showTrinadad()} src={trinidad} alt="Mountains" style={{width:'100%'}}/>
    </div>
</div>
<div className="clearfix">
    <div className="img-container">
    <img onClick={() => showAruba()}  src={aruba}  alt="Italy" style={{width:'100%'}}/> 
    </div>
    <div className="img-container">
    <img onClick={() => showPuerto()} src={puerto} alt="Forest" style={{width:'100%'}}/>
    </div>
    <div className="img-container">
    <img onClick={() => showHaiti()} src={haiti} alt="Mountains" style={{width:'100%'}}/>
    </div>
</div>

  {/* <Row>
    <Col xs={12} md={8}>
  
 <h1>Country Detail</h1>
<Carousel>
  <Carousel.Item >
    <img
      onClick={() => showJamaica()}
      className="d-block w-100"
      src={jamaica}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Click here</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      onClick={() => showBahama()}
      className="d-block w-100"
      src={bahamas} 
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Click here</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      onClick={() => showPuerto()}
      className="d-block w-100"
      src={puerto}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Click here</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      onClick={() => showTrinadad()}
      className="d-block w-100"
      src={trinidad} 
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Click here</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      onClick={() => showAruba()}
      className="d-block w-100"
      src={aruba} 
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Click here</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>*/}
</Col>
<Col xs={6} md={4}>  

      <div className="filterByCountry">
        <h4>Filter</h4>
        {/* <button className = "btn btn-danger space" onClick={() => showJamaica()}>Jamaica</button>                     
        <button className = "btn btn-info space" onClick={() => showBahama()}>Bahamas</button>
        <button className = "btn btn-info space" onClick={() => showAruba()}>Aruba</button>
        <button className = "btn btn-info space" onClick={() => showTrinadad()}>Trinidad and Tobago</button>
        <button className = "btn btn-info space" onClick={() => showPuerto()}>Puerto Rico</button> */}
        <button className = "btn btn-info space" onClick={() => showAll()}>Reset Filters</button>
      </div>

      <ul className="center-align">

        {filteredCountries.map((country, index) =>
        
          <div key={index} className="flip-card">
            {/* <div className="flip-card-inner"> */}
              {/* <div className="flip-card-front"> */}
                {/* {checkCountry(country.countryName)} */}
              {/* </div> */}
              <li>
                {/* <div className="flip-card-back"> */}
                  <p><strong>{country.countryName}</strong> </p>
                  <p><strong>Reopening Details:</strong> {country.openDetails}</p>
                  <p><strong>Reopening Date:</strong> {country.openDate}</p>
                  <p><strong>Pre-Arrival:</strong> {country.preArrival}</p>
                  <p><strong>Quarantine Rules:</strong> {country.quarantine}</p>
                  <p><strong>Rules for Positive Tests:</strong> {country.positiveTest}</p>
                  {/* <button className = "btn btn-info btn-small" onClick={() => props.whenAdoptClicked(props.index)}>Adopt Me!</button> */}
                {/* </div> */}
              </li>
            </div>
          // </div>
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

























// import React from 'react';
// import PropTypes from 'prop-types';
// import bahamas from './../img/Bahamas-flag.jpg';
// import jamaica from './../img/Jamaica-flag.jpeg';
// import {useState} from 'react';

// function Countryfirestore(props) {

//   function checkCountry(countryName) {
//     if (countryName === "jamaica") {
//       return <img className="jamaica" src={jamaica} alt="flag" />
//     } else {
//       return <img className="bahamas" src={bahamas} alt="flag" />;
//     }
//   }

//   const [filteredCountries, setFilteredCountries] = useState(props.countries.countries);

//   let countries = props.countries.countries.filter(countries => countries.country === "Jamaica");
//   let cases = props.countries.countries.filter(countries => countries.cases === "");
//   let details = props.countries.countries.filter(countries => countries.details === "");
//   // let date= props.countries.countries.filter(countries => countries.date === "");
//   // let arrival= props.countries.countries.filter();
//   // let testing= props.countries.countries.filter();
//   // let quarantine= props.countries.countries.filter();
//   // let positivity= props.countries.countries.filter();
  
//   function showCountry() {
//     setFilteredCountries(countries);
//   };

//   function showCases() {
//     setFilteredCountries(cases);
//   };
//   function showDetails() {
//     setFilteredCountries(details);
//   };

//   function showDate() {
//     setFilteredCountries(date);
//   };

//   function showArrival() {
//     setFilteredCountries(arrival);
//   };
//   function showTesting() {
//     setFilteredCountries(testing);
//   };
//   function showQuarantine() {
//     setFilteredCountries(quarantine);
//   };
//   function showPositivity() {
//     setFilteredCountries(positivity);
//   };

//   // function showAllCountry() {
//   //   setFilteredCountries();
//   // }

//   return (

//     <React.Fragment>
//       <h1>Lists</h1>
//       <div className="filterByCountry">
//         <h4>Filter</h4>
//         <button  onClick={() => showCountry()}>Country</button>                     
//         <button  onClick={() => showDate()}>Reopening-Date</button>
//         <button  onClick={() => showCases()}>Cases</button>
//         <button  onClick={() => showDetails()}>Reopening-Details</button>
//         <button  onClick={() => showArrival()}>Prearrival-Requirements</button>
//         <button  onClick={() => showTesting()}>Testing-Requirements</button>
//         <button  onClick={() => showQuarantine()}>Quarantine-Requirements</button>
//         <button  onClick={() => showPositivity()}>Positivity-Requirements</button>
//       </div>

//       <ul className="center-align">

//         {filteredCountries.map((country, index) =>
        
//           <div key={index}>
//             <div>
//               <div>
//                 {checkCountry(country.country)}
//               </div>
//               <li>
//                 <div>
//                   <h3>Name: {country.name}</h3>
//                   <p><strong>Country:</strong> {country.country}</p>
//                   <p><strong>Cases:</strong> {country.cases}</p>
//                   <p><strong>Details:</strong> {country.details}</p>
//                   <p><strong>Date:</strong> {country.date}</p>
//                   <button onClick={() => props.whenAdoptClicked(props.index)}>see!</button>
//                 </div>
//               </li>
//             </div>
//           </div>
//         )}
//       </ul>
//     </React.Fragment>
//   );
// }

// Countryfirestore.propTypes = {
//   countries: PropTypes.object,
//   isLoading: PropTypes.bool,
//   error: PropTypes.string
// }

// export default Countryfirestore;









