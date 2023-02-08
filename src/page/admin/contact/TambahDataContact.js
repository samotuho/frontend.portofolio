import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../style/menu.css";

function TambahDataContact() {
  const [original_name, setOriginal_name] = useState("");
  const [email_address, setEmail_address] = useState("");
  const [your_message, setYour_message] = useState("");
  const navigate = useNavigate();

  const sendData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact", {
        original_name,
        email_address,
        your_message,
      });
      navigate("/dashcontact");
    } catch (error) {
      console.log(error);
    }
  };
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
            <div style={{ paddingLeft: "20px", marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3>Tambah data Contact</h3>
              <Link className="btn" style={{ backgroundColor: "#16A34A" }} to={"/dashcontact"} type="">
                Back
              </Link>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 " style={{ paddingLeft: "20px", paddingTop: "20px" }}>
              <Form className="pt-3" onSubmit={sendData}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Original name</Form.Label>
                  <Form.Control value={original_name} onChange={(e) => setOriginal_name(e.target.value)} type="text" autoComplete="off" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control value={email_address} onChange={(e) => setEmail_address(e.target.value)} type="email" autoComplete="off" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your Message</Form.Label>
                  <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control as="textarea" value={your_message} onChange={(e) => setYour_message(e.target.value)} style={{ height: "100px" }} autoComplete="off" />
                  </FloatingLabel>
                </Form.Group>

                <Button style={{ backgroundColor: "#16A34A", border: "0", width: "100%" }} type="submit">
                  Send
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default TambahDataContact;
