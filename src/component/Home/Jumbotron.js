import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Figure from "react-bootstrap/Figure";
import Samo from "../../Assets/samo.png";

function Jumbotron() {
  return (
    <Container style={{ marginTop: "20px", borderRadius: "10px" }}>
      <Row>
        <Col className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div>
            <h4>Hallo, nama saya</h4>
            <h1 style={{ fontSize: "4rem", lineHeight: "1.5cm" }}>
              <span style={{ color: "#16A34A" }}>
                Samotuho <br /> Ndruru
              </span>
            </h1>
            <p>
              Saya seorang <span style={{ color: "#16A34A" }}>Middle Frontend web developer</span> asal Nias <br /> senang bertemu anda.
            </p>
          </div>
        </Col>
        <Col className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <Figure>
            <Figure.Image src={Samo} className="" style={{ height: "530px", width: "510px" }} />
          </Figure>
        </Col>
      </Row>
    </Container>
  );
}

export default Jumbotron;
