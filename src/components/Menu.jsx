import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/images/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";


const Menu = () => {

  const navLink = {
    paddingLeft: 0,
    paddingRight: `20px`
  }

  const [services, setServices] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROUTE}/service`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let menuServices = []
        if(data){
          data.map((val, key) => {
            menuServices.push({
              label: val.service_name,
              url: val.taskNow_unique_id
            })
          })
        }
        setServices(menuServices)
      });
  }, [])


  return (
    <Navbar expand="lg" style={{ backgroundColor: '#121216', padding: '10px 0px' }}>
      <Container >
        <Navbar.Brand as={Link} to='/'>
            <img src={Logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <RxHamburgerMenu color="#fff"/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to='/' style={navLink}>Home</Nav.Link>
            <Nav.Link as={Link} to='/about-us' style={navLink}>About Us</Nav.Link>
            <NavDropdown style={navLink} title={
                <span className="text-white my-auto">Services</span>
              }
            >
              {
                services.map(({label, url}, index) => {
                  return <NavDropdown.Item as={Link} to={`/${url}`} key={index}>{label}</NavDropdown.Item>
                })
              }
            </NavDropdown>
            <Nav.Link style={navLink} as={Link} to='/become-technician'>Became A Technician</Nav.Link>
            <Nav.Link style={navLink} as={Link} to='/contact-us'>Contact Us</Nav.Link>
          </Nav>
          <Button className='btn-danger' as={Link} to='/book-now'>Book Now</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default Menu;