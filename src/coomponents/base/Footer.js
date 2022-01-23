import React from "react";
import { Container } from "@chakra-ui/react";

function Footer() {
  return (
    <Container centerContent p={{ base:"4", md:"6" }} maxWidth="3xl" className="App">
      <footer className="py-4 text-center">
        <span className="text-dark">&copy; 2021　Yousuke Kamiya</span>
      </footer>
    </Container>
  );
}
export default Footer