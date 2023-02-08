import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Samo from "../../Assets/samo.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Story() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    getAbout();
  }, []);

  const getAbout = async () => {
    const dataAbout = await axios.get("http://localhost:5000/about");
    setAbout(dataAbout.data);
  };
  return (
    <Container style={{ marginTop: "20px", borderRadius: "10px", backgroundColor: "#1f2937" }} className="mb-5">
      <Row>
        <Col className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <Figure>
            <Figure.Image src={Samo} className="" style={{ height: "530px", width: "510px" }} />
          </Figure>
        </Col>
        <Col className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div>
            <h1 style={{ paddingBottom: "50px" }}>About Me</h1>
            {about.map((abt) => (
              <div key={abt.id}>
                <div style={{ width: "170px", display: "inline-block" }}>Nama lengkap</div>: {abt.nama_lengkap} <br />
                <div style={{ width: "170px", display: "inline-block" }}>Tanggal lahir</div>: {abt.tanggal_lahir} <br />
                <div style={{ width: "170px", display: "inline-block" }}>Alamat</div>: {abt.alamat}
                <br />
                <div style={{ width: "170px", display: "inline-block" }}>Email</div>: {abt.email}
                <br />
                <div style={{ width: "170px", display: "inline-block" }}>No. Hp/Wa</div>: {abt.No_hp_wa} <br />
                <br />
                <div>
                  <div>Pendidikan Formal & Pengalaman :</div>
                  <div>{abt.sekolah_dasar}</div>
                  <div>{abt.sekolah_menengah_pertama}</div>
                  <div>{abt.sekolah_menengah_kejuruan}</div>
                  <div>{abt.strata_satu}</div>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Story;
