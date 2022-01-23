import React from "react";
import { Container, Box, Center, Text } from "@chakra-ui/react";

function Skill_level_frontend() {
  return (
    <Container>
    <Center className="skill_level_title">Frontend</Center>
    <Center className="row skill_row">
      <div className="skill_level col-3 col-md-4">
        <h5 className="mb-0">
          Javascript
          <span className="small text-secondary skill_range">
             - 初級
          </span>
        </h5>
        <div className="pie_percent_group d-flex flex-row">
          <div className="pie">
            <span></span>
          </div>       
          <div className="pie_js">
            <span></span>
          </div>          
        </div>
      </div>

      <div className="skill_level col-3 col-md-4">
        <h5 className="mb-0">
          ReactJS
          <span className="small text-secondary skill_range">
             - 初級
          </span>
        </h5>
        <div className="pie_percent_group d-flex flex-row">
          <div className="pie">
            <span></span>
          </div>       
          <div className="pie_react">
            <span></span>
          </div>          
        </div>
      </div>

      <div className="skill_level col-3 col-md-4">
        <h5 className="mb-0">
          HTML
          <span className="small text-secondary skill_range">
             - 初級
          </span>
        </h5>
        <div className="pie_percent_group d-flex flex-row">
          <div className="pie">
            <span></span>
          </div>       
          <div className="pie_html">
            <span></span>
          </div>          
        </div>
      </div>

      <div className="skill_level col-3 col-md-4">
        <h5 className="mb-0">
          CSS
          <span className="small text-secondary skill_range">
             - 初級
          </span>
        </h5>
        <div className="pie_percent_group d-flex flex-row">
          <div className="pie">
            <span></span>
          </div>       
          <div className="pie_css">
            <span></span>
          </div>          
        </div>
      </div>

      <div className="skill_level col-3 col-md-4">
        <h5 className="mb-0">
          Chakra UI -
          <span className="small text-secondary skill_range">
             初級
          </span>
        </h5>
        <div className="pie_percent_group d-flex flex-row">
          <div className="pie">
            <span></span>
          </div>       
          <div className="pie_chakra_ui">
            <span></span>
          </div>          
        </div>
      </div>

    </Center>
  </Container>
  );
}
export default Skill_level_frontend