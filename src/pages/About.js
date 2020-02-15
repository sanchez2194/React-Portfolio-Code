import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png">
        <h1>Anthony Sanchez</h1>
        <h2>React Portfolio</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My React Portfolio!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              This is my portfolio built with the React App! We are using our current knowledge to show off
              some of our current skills with React. Feel free to browse around and see some of the stuff i have
               been working on.
            </p>
            <p>
              <h1>
                About me
              </h1>
              <h3>
                I am new to coding and have learned that this is the career path i want to head down.
                In my mind i dont see the internet going anywhere anytime soon so why not become a web developer right?
                So in my journey to become one of the best develpoers out there i decided to take a bootcamp to learn full-stack
                developement in hopes of landing a job to better myself in the direction i want to head with my career
              </h3>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
