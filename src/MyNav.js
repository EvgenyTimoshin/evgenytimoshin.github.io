import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Media from 'react-media'

function MyNav(){

    const regularNavBar = () => {
      return(
        <Navbar className="color-nav" sticky="top" variant="dark" expand="lg" collapseOnSelect>
        <Navbar.Brand href="/">Evgeny Timoshin</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="education">Education</Nav.Link>
          <Nav.Link href="career">Career</Nav.Link>
          <Nav.Link href="projects">Projects</Nav.Link>
        </Nav>
        <Navbar.Brand href="https://github.com/EvgenyTimoshin/">
          <img
            src="/GitHub_Logo_White.png"
            width="80"
            height="30"
            className="d-inline-block align-center"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="https://www.linkedin.com/in/evgenytimoshin/">
          <img
            src="/LI-Logo.png"
            width="90"
            height="24"
            className="d-inline-block align-center"
            alt="React Bootstrap logo"
            style={{marginBottom: 3}}
          />
        </Navbar.Brand>
      </Navbar>  
      );
    };

    const collapseAbleNavBar = () => {
      return(
        <Navbar className="color-nav" sticky="top" variant="dark" expand="lg" collapseOnSelect>
        <Navbar.Brand href="/">Evgeny Timoshin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="education">Education</Nav.Link>
          <Nav.Link href="career">Career</Nav.Link>
          <Nav.Link href="projects">Projects</Nav.Link>
        </Nav>
        <Navbar.Brand href="https://github.com/EvgenyTimoshin/">
          <img
            src="/GitHub_Logo_White.png"
            width="80"
            height="30"
            className="d-inline-block align-left"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="https://www.linkedin.com/in/evgenytimoshin/">
          <img
            src="/LI-Logo.png"
            width="90"
            height="24"
            className="d-inline-block align-left"
            alt="React Bootstrap logo"
            style={{marginBottom: 3}}
          />
        </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>

      );
    };

    return(
      
        <Media queries={{
          small: "(max-width: 1000px)",
          medium: "(min-width: 1000px) and (max-width: 3000px)",
        }}>
          {matches => (
            <Fragment>
              {matches.small && collapseAbleNavBar()}
              {matches.medium && regularNavBar()}
            </Fragment>
          )}
        </Media>
      
    );
}

export default MyNav;