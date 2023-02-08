import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (error) {
      setError(error.response.data);
      setTimeout(() => {
        setError("");
      }, 1500);
    }
  };
  return (
    <Container fluid style={{ width: "100%", height: "100vh", backgroundColor: "#1f2937", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Row>
        <Col>
          <h2 className="pb-3">Login sebagai Admin</h2>
          <Form style={{ width: "500px" }} onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error.msg}</div>}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ width: "100%", marginBottom: "10px" }}>
              Submit
            </Button>
            <Link className="btn" style={{ color: "#e2edff" }} to={"/register"}>
              Register disini
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default Login;
