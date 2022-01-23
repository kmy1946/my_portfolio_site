import React from "react";
import {Link as Scroll} from "react-scroll";
import { Container } from "@chakra-ui/react";

function Base() {
  const logoheader = require('../images/space_garbage.jpg');

  return (
    <Container centerContent p={{ base:"4", md:"3" }} maxWidth="3xl" className="App">
          <div>
            <nav className="header_nav navbar navbar-expand-lg">
              <div className="container">
                <ul>
                  <a className="logoheader navbar-brand ml-auto" href="/">
                    <img src={logoheader} width="80" height="80" />
                  </a>
                </ul>
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item mr-3">
                    <Scroll to="profile" className="nav-link nav-color" smooth={true}>PROFILE</Scroll>
                  </li>
                  <li className="nav-item mr-3">
                    <Scroll to="skill" className="nav-link nav-color" smooth={true}>ABOUT</Scroll>
                  </li>
                  <li className="nav-item mr-3">
                    <Scroll to="works" className="nav-link nav-color" smooth={true}>WORKS</Scroll>
                  </li>
                  <li className="nav-item mr-3">
                    <Scroll to="contact" className="nav-link nav-color" smooth={true}>CONTACT</Scroll>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
    </Container>
  );
}
export default Base