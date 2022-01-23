import React from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import {Link as Scroll} from "react-scroll";
import Logo from "./Logo";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo/>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg width="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="black" >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box display={{ base: isOpen ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }} >
      <Stack spacing={8} align="center" justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["row", "row", "row", "row"]} pt={[4, 4, 0, 0]} className="navbar-nav">
          <Scroll to="profile" className="nav-link mr-2 nav-color" smooth={true}>PROFILE</Scroll>
          <Scroll to="skill" className="nav-link mr-2 nav-color" smooth={true}>SKILLS</Scroll>
          <Scroll to="works" className="nav-link mr-2 nav-color" smooth={true}>WORKS</Scroll>
          <Scroll to="contact" className="nav-link mr-2 nav-color" smooth={true}>CONTACT</Scroll>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" bg={["primary.500", "primary.500", "transparent", "transparent"]}
      {...props} >
      {children}
    </Flex>
  );
};

export default NavBar;