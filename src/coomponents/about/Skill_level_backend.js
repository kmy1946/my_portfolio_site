import React from "react";
import { Container, Center } from "@chakra-ui/react";

function Skill_level_backend() {
  return (
    <Container>
      <Center className="skill_level_title">Backend</Center>
      <Center className="row skill_row">
        <div className="skill_level col-2 col-md-4">
          
          <h5 className="mb-0 skill_name_range">
            Python
            <span className="small text-secondary skill_range">
              - 初級
            </span>
          </h5>
          <div className="pie_percent_group d-flex flex-row">
          <div className="pie">
              <span></span>
            </div>       
            <div className="pie_python">
              <span></span>
            </div>          
          </div>
        </div>

        <div className="skill_level col-3 col-md-4">
          <h5 className="mb-0">
            Django
            <span className="small text-secondary skill_range">
              - 初級
            </span>
          </h5>
          <div className="pie_percent_group d-flex flex-row">
            <div className="pie">
              <span></span>
            </div>       
            <div className="pie_django">
              <span></span>
            </div>          
          </div>
        </div>

        <div className="skill_level col-3 col-md-4">
          <h5 className="mb-0">
            Flask
            <span className="small text-secondary skill_range">
              - 初級
            </span>
          </h5>
          <div className="pie_percent_group d-flex flex-row">
            <div className="pie">
              <span></span>
            </div>       
            <div className="pie_flask">
              <span></span>
            </div>          
          </div>
        </div>
      </Center>
    </Container>
  );
}
export default Skill_level_backend