import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Jumbotron from "../component/Home/Jumbotron";
import About from "../component/Home/About";
import Skill from "../component/Home/Skill";
import Projects from "../component/Home/Projects";
import Contact from "../component/Home/Contact";
import Footer from "../component/Home/Footer";
function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron />
          <About />
          <Skill />
          <Projects />
          <Contact />
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
