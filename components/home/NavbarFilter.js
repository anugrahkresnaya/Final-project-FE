import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../assets/logo.png"


const ButtonSignUp = styled.button`
    background-color: #4600FF;
    color: white;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid #4600FF;
    border-radius: 30px;
    margin-right: 10px;
    display: block;
`;

const ButtonLogin = styled.button`
    background-color: #FFFFFF;
    color: black;
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 30px;
    border: 2px solid #4600FF;
    display: block;
    text-decoration: none;
`;

function NavigationFilter() {

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><Image src={Logo} width={80} height={80} alt="logo" ></Image></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 E-flights
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1">
                  <Nav.Link href="#action1">All Flights</Nav.Link>
                  <Nav.Link href="#action2">Schedule</Nav.Link>
                  <Nav.Link href="#action2">Passenger</Nav.Link>
                  <Nav.Link href="#action2">Your Orders</Nav.Link>
                </Nav>
                <p>welcome, {session.user.name}</p>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavigationFilter;