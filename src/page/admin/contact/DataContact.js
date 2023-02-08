import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../../style/menu.css";

function Admin() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    getContactAll();
  }, []);

  const daleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/contact/${id}`);
      getContactAll();
    } catch (error) {
      console.log(error);
    }
  };

  const getContactAll = async () => {
    const dataContact = await axios.get("http://localhost:5000/contact");
    setContact(dataContact.data);
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
            <Link to={"/dashboard"} className="btn text-white mb-3 ">
              Dashboard
            </Link>{" "}
            <br />
            <Link to={"/dashcontact"} className="btn text-white mb-3 ">
              Contact
            </Link>{" "}
            <br />
            <Link to={"/dashabout"} className="btn text-white mb-3 ">
              About
            </Link>{" "}
            <br />
          </Col>
          <Col className="col-sm-12 col-md-12 col-lg-10">
            <div style={{ fontSize: "10px", paddingLeft: "20px", paddingTop: "20px" }}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th className="text-center">No</th>
                    <th className="text-center">Original name</th>
                    <th className="text-center">Email address</th>
                    <th className="text-center">Your Message</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contact.map((ctc, index) => (
                    <tr key={ctc.id}>
                      <td>{index + 1}</td>
                      <td>{ctc.original_name}</td>
                      <td>{ctc.email_address}</td>
                      <td>{ctc.your_message}</td>
                      <td className="text-center">
                        <Link className="btn bg-primary me-1" to={`edit/${ctc.id}`}>
                          update
                        </Link>
                        <Link className="btn bg-danger " onClick={() => daleteContact(ctc.id)}>
                          delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Link to={"/dashaddcontact"} className="btn bg-primary">
                New contact
              </Link>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Admin;
