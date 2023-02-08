import Samo from "../../Assets/samo.png";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Figure from "react-bootstrap/Figure";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [original_name, setOriginal_name] = useState("");
  const [email_address, setEmail_address] = useState("");
  const [your_message, setYour_message] = useState("");

  const sendData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact", {
        original_name,
        email_address,
        your_message,
      });
      setOriginal_name("");
      setEmail_address("");
      setYour_message("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container style={{ marginTop: "20px", backgroundColor: "#1f2937", borderRadius: "10px" }} className="mb-5">
      <Col className="mb-3">
        <h1>Contact</h1>
      </Col>
      <Row>
        <Col className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
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
        </Col>
        <Col className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <Figure>
            <Figure.Image src={Samo} className="" style={{ height: "500px", width: "510px" }} />
          </Figure>
        </Col>
      </Row>
    </Container>
  );
}
export default Contact;
