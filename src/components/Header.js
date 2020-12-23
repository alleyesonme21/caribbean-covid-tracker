import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../index.css' 

function Header() {
  return (
  <React.Fragment>
    <div className="header"> 
  <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark"> 
  <Navbar.Brand href="#home">About</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Destinations</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Countries Details" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Details</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Basket
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> 
</div>
  </React.Fragment>
  )
}

export default Header;




















// // import React from 'react'; 
// // import { Link } from 'react-router-dom'
// // import './../index'

// // function Header() {
// //   return (
// //     <React.Fragment>
// //     {/* <nav className='header'>  */}

// //         <h1 className="center-align">Caribbean Covid-19 Tracker</h1>
// //         <ul>
// //           <li>
// //             <Link to="/" className = "btn btn-danger space" >Home</Link>
// //           </li>

// //           <li>
// //             <Link to="/info" className = "btn btn-success space">About</Link>
// //           </li>

// //           <li>
// //             <Link to="/country" className = "btn btn-info space">Destinations</Link>
// //           </li>

// //           </ul>
    
// //     {/* </nav> */}
// //     </React.Fragment>
// //   );
// // }

// // export default Header;