import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import Samo from "../../../Assets/samo.png";
import "../../../style/menu.css";

function Dashboard() {
  return (
    <Container fluid style={{ width: "100%", height: "100vh" }}>
      <Row>
        <Col className="col-12 adm" style={{ backgroundColor: "#1f2937", padding: "5px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1 style={{ paddingLeft: "10px" }}>Samotuho Ndruru</h1>
            <Link style={{ paddingRight: "10px" }} to={"/logout"}>
              Logout
            </Link>
          </div>
        </Col>
        <Row style={{ margin: "0", padding: "0", width: "100%", height: "88vh" }}>
          <Col className="col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2 pt-5 menu" style={{ paddingLeft: "50px", backgroundColor: "#1f2937" }}>
            <Link to={"/dashboard"} className="btn text-white mb-3">
              Dashboard
            </Link>{" "}
            <br />
            <Link to={"/dashcontact"} className="btn text-white mb-3">
              Contact
            </Link>{" "}
            <br />
            <Link to={"/dashabout"} className="btn text-white mb-3">
              About
            </Link>{" "}
            <br />
          </Col>
          <Col className="col-10">
            <Row>
              <Col>
                <div style={{ paddingTop: "60px", paddingLeft: "20px" }}>
                  <h3>
                    Hy! Selamat datang di Dashboard Admin! <br />
                  </h3>
                </div>
                <div style={{ paddingTop: "40px", paddingLeft: "20px" }}>
                  <h5 style={{ lineHeight: ".90cm" }}>
                    Anda memasuki halaman Admin, artinya anda memiliki akses terhadap Dashboard ini, dan perlu diketahui bahwa Dashboard ini terekam secara real time. <br />
                    Harap menjaga privasi dan data data penting didalamnya.
                  </h5>
                </div>
                <div style={{ paddingTop: "60px", paddingLeft: "20px" }}>
                  <h5>Develop: Samotuho Ndruru || Programmer Copas</h5>
                </div>
              </Col>
              <Col className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 pt-5">
                <Figure>
                  <Figure.Image src={Samo} className="" style={{ height: "440px", width: "510px" }} />
                </Figure>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Dashboard;
