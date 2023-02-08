import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
// import Figure from "react-bootstrap/Figure";
// import Banner from "../../Assets/banner.png";
import { useEffect } from "react";
import "../../style/Skills.css";
import AOS from "aos";

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container style={{ marginTop: "20px", borderRadius: "10px", backgroundColor: "#1f2937" }} className="mb-5">
      <Row>
        <Col className="mb-3">
          <h1>My Project</h1>
        </Col>
        <Row style={{ display: "flex", justifyContent: "space-around", alignItems: "center", margin: "0px" }}>
          {/* <Col className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div data-aos="fade-up" data-aos-duration="3000">
              <Figure className="wrappskill">
                <Figure.Image width={300} height={160} alt="171x180" src={Banner} />
                <Figure.Caption className="" style={{ fontSize: "10px", color: "white" }}>
                  Service PC/Laptop
                </Figure.Caption>
              </Figure>
            </div>
          </Col>
          <Col className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div data-aos="fade-up" data-aos-duration="3000">
              <Figure className="wrappskill">
                <Figure.Image width={300} height={160} alt="171x180" src={Banner} />
                <Figure.Caption className="" style={{ fontSize: "10px", color: "white" }}>
                  HTML
                </Figure.Caption>
              </Figure>
            </div>
          </Col>
          <Col className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div data-aos="fade-up" data-aos-duration="3000">
              <Figure className="wrappskill">
                <Figure.Image width={300} height={160} alt="171x180" src={Banner} />
                <Figure.Caption className="" style={{ fontSize: "10px", color: "white" }}>
                  CSS
                </Figure.Caption>
              </Figure>
            </div>
          </Col>
          <Col className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div data-aos="fade-up" data-aos-duration="3000">
              <Figure className="wrappskill">
                <Figure.Image width={300} height={160} alt="171x180" src={Banner} />
                <Figure.Caption className="" style={{ fontSize: "10px", color: "white" }}>
                  BOOTSTRAP
                </Figure.Caption>
              </Figure>
            </div>
          </Col>
          <Col className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div data-aos="fade-up" data-aos-duration="3000">
              <Figure className="wrappskill">
                <Figure.Image width={300} height={160} alt="171x180" src={Banner} />
                <Figure.Caption className="" style={{ fontSize: "10px", color: "white" }}>
                  JAVASCRIPT
                </Figure.Caption>
              </Figure>
            </div>
          </Col>
          <Col className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div data-aos="fade-up" data-aos-duration="3000">
              <Figure className="wrappskill">
                <Figure.Image width={300} height={160} alt="171x180" src={Banner} />
                <Figure.Caption className="" style={{ fontSize: "10px", color: "white" }}>
                  REACT JS
                </Figure.Caption>
              </Figure>
            </div>
          </Col> */}
        </Row>
      </Row>
    </Container>
  );
}
export default Projects;
