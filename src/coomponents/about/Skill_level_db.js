import React from "react";
import { Container, Center } from "@chakra-ui/react";

function Skill_level_db() {
  return (
    <Container marginTop='-200px'>
      <Center className="skill_level_title">Database</Center>
      <Center className="row skill_row">
        <div className="skill_level col-2 col-md-3">
          <h5 className="mb-0">
          PostgreSQL-
            <span className="small text-secondary skill_range">
            初級
            </span>
          </h5>
          <div className="pie_percent_group d-flex flex-row">
          <div className="pie">
              <span></span>
            </div>       
            <div className="pie_postgresql">
              <span></span>
            </div>          
          </div>
        </div>
      </Center>
    </Container>
  );
}
export default Skill_level_db