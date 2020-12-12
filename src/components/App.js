import React from 'react';
import Header from './Header'; 
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Map from './Map';
// import Hearder from './Header';

function App() {
  return ( 
    <React.Fragment>
      <Router> 
      <Navbar/>
      <Switch>
        <Route path='/' exact />
      </Switch>
      </Router>
      <Header/>
      <Map/>
    </React.Fragment>
  );
}

export default App;
