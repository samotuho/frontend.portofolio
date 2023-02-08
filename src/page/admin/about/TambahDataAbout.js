import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../style/menu.css";

function TambahDataAbout() {
  const [nama_lengkap, setNama_lengkap] = useState("");
  const [tanggal_lahir, setTanggal_lahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [No_hp_wa, setNo_hp_wa] = useState("");
  const [sekolah_dasar, setSekolah_dasar] = useState("");
  const [sekolah_menengah_pertama, setSekolah_menengah_pertama] = useState("");
  const [sekolah_menengah_kejuruan, setSekolah_menengah_kejuruan] = useState("");
  const [strata_satu, setStrata_satu] = useState("");
  const navigate = useNavigate();

  const sendDataAbout = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/about", {
        nama_lengkap,
        tanggal_lahir,
        alamat,
        email,
        No_hp_wa,
        sekolah_dasar,
        sekolah_menengah_pertama,
        sekolah_menengah_kejuruan,
        strata_satu,
      });
      navigate("/about");
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
              <h3>Tambah data About</h3>
              <Link className="btn" style={{ backgroundColor: "#16A34A" }} to={"/dashabout"} type="">
                Back
              </Link>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 formupdate" style={{ fontSize: "10px", paddingLeft: "40px", paddingTop: "20px" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "20px" }}>
                <div className="col-sm-6 col-md-6 col-lg-10 col-xl-10 col-xxl-10 m-3">
                  <Form onSubmit={sendDataAbout}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Nama lengkap</Form.Label>
                      <Form.Control value={nama_lengkap} onChange={(e) => setNama_lengkap(e.target.value)} type="text" autoComplete="off" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTanggallahir">
                      <Form.Label>Tanggal lahir</Form.Label>
                      <Form.Control value={tanggal_lahir} onChange={(e) => setTanggal_lahir(e.target.value)} type="date" autoComplete="off" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAlamat">
                      <Form.Label>Alamat</Form.Label>
                      <Form.Control value={alamat} onChange={(e) => setAlamat(e.target.value)} type="text" autoComplete="off" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="off" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNo.Hp/Wa">
                      <Form.Label>No. Hp/Wa</Form.Label>
                      <Form.Control value={No_hp_wa} onChange={(e) => setNo_hp_wa(e.target.value)} type="number" autoComplete="off" />
                    </Form.Group>
                  </Form>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-10 col-xl-10 col-xxl-10 m-3" style={{ paddingBottom: "40px" }}>
                  <Form onSubmit={sendDataAbout}>
                    <Form.Group className="mb-3" controlId="formBasicSekolahDasar">
                      <Form.Label>Sekolah Dasar</Form.Label>
                      <Form.Control value={sekolah_dasar} onChange={(e) => setSekolah_dasar(e.target.value)} type="text" autoComplete="off" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSekolahMenengahPertama">
                      <Form.Label>Sekolah Menengah Pertama</Form.Label>
                      <Form.Control value={sekolah_menengah_pertama} onChange={(e) => setSekolah_menengah_pertama(e.target.value)} type="text" autoComplete="off" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSekolahMenengahKejuruan">
                      <Form.Label>Sekolah Menengah Kejuruan</Form.Label>
                      <Form.Control value={sekolah_menengah_kejuruan} onChange={(e) => setSekolah_menengah_kejuruan(e.target.value)} type="text" autoComplete="off" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicStrataSatu">
                      <Form.Label>Strata Satu</Form.Label>
                      <Form.Control value={strata_satu} onChange={(e) => setStrata_satu(e.target.value)} type="text" autoComplete="off" />
                    </Form.Group>

                    <Button style={{ backgroundColor: "#16A34A", border: "0", width: "100%" }} type="submit">
                      Send
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default TambahDataAbout;
