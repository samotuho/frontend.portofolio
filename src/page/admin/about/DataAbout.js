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

function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    getAboutctAll();
  }, []);
  const daleteAbout = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/about/${id}`);
      getAboutctAll();
    } catch (error) {
      console.log(error);
    }
  };
  const getAboutctAll = async () => {
    const dataAbout = await axios.get("http://localhost:5000/about");
    setAbout(dataAbout.data);
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
          <Col>
            <div style={{ fontSize: "10px", paddingTop: "20px" }}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th className="text-center " style={{ justifyContent: "flex-start" }}>
                      No
                    </th>
                    <th className="text-center" style={{ width: "150px" }}>
                      Nama lengkap
                    </th>
                    <th className="text-center" style={{ width: "100px" }}>
                      Tanggal lahir
                    </th>
                    <th className="text-center" style={{ width: "100px" }}>
                      Alamat
                    </th>
                    <th className="text-center">Email</th>
                    <th className="text-center">No. Hp/Wa</th>
                    <th className="text-center" style={{ width: "150px" }}>
                      Sekolah Dasar
                    </th>
                    <th className="text-center" style={{ width: "230px" }}>
                      Sekolah Menengah Pertama
                    </th>
                    <th className="text-center" style={{ width: "230px" }}>
                      Sekolah Menengah Kejuruan
                    </th>
                    <th className="text-center" style={{ width: "100px" }}>
                      Strata Satu
                    </th>
                    <th className="text-center" style={{ width: "350px" }}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {about.map((abt, index) => (
                    <tr key={abt.id}>
                      <td>{index + 1}</td>
                      <td>{abt.nama_lengkap}</td>
                      <td>{abt.tanggal_lahir}</td>
                      <td>{abt.alamat}</td>
                      <td>{abt.email}</td>
                      <td>{abt.No_hp_wa}</td>
                      <td>{abt.sekolah_dasar}</td>
                      <td>{abt.sekolah_menengah_pertama}</td>
                      <td>{abt.sekolah_menengah_kejuruan}</td>
                      <td>{abt.strata_satu}</td>
                      <td className="text-center">
                        <Link className="btn bg-primary me-1" to={`editabout/${abt.id}`}>
                          update
                        </Link>
                        <Link className="btn bg-danger " onClick={() => daleteAbout(abt.id)}>
                          delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Link to={"/dashaddabout"} className="btn bg-primary">
                New About
              </Link>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default About;
