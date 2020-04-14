import React from "react";
import Container from "react";
import SimpleHeader from "./SimpleHeader.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCard.js";

function Projects(){



    return(
   <>
     <SimpleHeader Title="My Projects" Color="#0C0D0F"/>
     <div className="cardContainer">
     <Row>

                <Col className="cardColumn">
                   <ProjectCard Image="virtualreality.jpg" Title="Architecture and Design VR" Description="Final year university project which won Best Final Year Project. Project I am most proud of." Date="2019"/>
                </Col>
            
                <Col className="cardColumn">
                    <ProjectCard Image="coronavirus.jpg" Title="Corona3D Live" Description="A 3D Visualizer for live data of the coronavirus on the Earth's globe. Using the latest REST Apis as data sources." Date="2020 - present"/>
                </Col>
                   
                <Col className="cardColumn">
                    <ProjectCard Image="githubbot.jpg" Title="Github Collaboration Chat Bot" Description="An AI chat bot which won us 1st place at WorkDay hackathon in team of 4. Enables users on discrod to collaborate on Github projects." Date="2019"/>
                </Col>
            
        </Row>

        <Row>

                <Col className="cardColumn">
                    <ProjectCard Image="neonheat.png" Title="Neon Heat" Description="A game me and 3 others designed and developed. Won Best Art and Design at Games Fleadh competition." Date="2019"/>
                </Col>

                <Col className="cardColumn">
                    <ProjectCard Image="mmo.jpg" Title="World's Greates MMO" Description="A Massively Multiplayer Online game that I am currently working on with a fellow developer." Date="2020 - present"/>
                </Col>

                <Col className="cardColumn">
                    <ProjectCard Image="spacebattle.png" Title="Cinematic AI Space Battles" Description="Simulation of Autonomous space ships using various steering behaviours and state machines." Date="2019"/>
                </Col>
            </Row>
            </div>
        </>
    );
}

export default Projects;