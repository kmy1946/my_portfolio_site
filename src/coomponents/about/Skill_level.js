import React from "react";
import { SimpleGrid, Container, Box, Center, Text } from "@chakra-ui/react";
import Skill_level_backend from "./Skill_level_backend";
import Skill_level_frontend from "./Skill_level_frontend";
import Skill_level_db from "./Skill_level_db";
import './skill_styles.css'

function Skill_level() {
  return (
    <Box marginTop={200} w={'full'} boxShadow={'2xl'} rounded={'lg'} p={10} paddingBottom={20} className="skill_level_group mb-5 justify-content-center" id="skill">
      <Center className="skill_level_p">Skill Levels</Center>
      <SimpleGrid columns={2} spacing={8} spacingX='0px' marginTop={10}>
        <Box className="row skill_row">
          <Skill_level_backend />
        </Box>
        <Box className="row skill_row">
          <Skill_level_frontend />
        </Box>
        <Box className="row skill_row">
          <Skill_level_db />
        </Box>
      </SimpleGrid>
  </Box>
  );
}
export default Skill_level