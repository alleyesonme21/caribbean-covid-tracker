import React from 'react';
import MainControl from './MainControl';
// import Home from './Home'
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Navbar } from 'react-bootstrap'
function App() {
  return (
    <Router>
      <Header />
      <Switch> 
        <MainControl />
        </Switch>
        <Footer/> 
    </Router>
  );
}
export default App;



// import React from 'react';
// import MainControl from './MainControl';
// // import Navbar from './Navbar';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// function App() {
//   return (
//     <React.Fragment>
//       <div className="Container">
//         {/* <Navbar /> */}
//         <MainControl />
//       </div>
//     </React.Fragment>
//   );
// }
// export default App;