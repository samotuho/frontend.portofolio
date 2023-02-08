import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "../../style/Skills.css";
import ProgressBar from "react-bootstrap/ProgressBar";

function Skill() {
  const hypertextMarkupLanguage = 80;
  const cascadingStyleSheets = 70;
  const bootstrap = 80;
  const javascript = 67;
  const reactjs = 70;
  const expressjs = 60;

  return (
    <Container style={{ marginTop: "20px", borderRadius: "10px", backgroundColor: "#1f2937" }} className="mb-5">
      <Row>
        <Col className="mb-3 ">
          <h1>My Skills</h1>
          <div className="mt-5">
            <div style={{ marginBottom: "30px", lineHeight: ".10cm" }}>
              <p>Hypertext Markup Language</p>
              <ProgressBar animated now={hypertextMarkupLanguage} label={`${hypertextMarkupLanguage}%`} style={{ width: "100%", height: "17px" }} />
            </div>
            <div style={{ marginBottom: "30px", lineHeight: ".10cm" }}>
              <p>Cascading Style Sheets</p>
              <ProgressBar animated now={cascadingStyleSheets} label={`${cascadingStyleSheets}%`} style={{ width: "100%", height: "17px" }} />
            </div>
            <div style={{ marginBottom: "30px", lineHeight: ".10cm" }}>
              <p>Bootstrap</p>
              <ProgressBar animated now={bootstrap} label={`${bootstrap}%`} style={{ width: "100%", height: "17px" }} />
            </div>
            <div style={{ marginBottom: "30px", lineHeight: ".10cm" }}>
              <p>Javascript</p>
              <ProgressBar animated now={javascript} label={`${javascript}%`} style={{ width: "100%", height: "17px" }} />
            </div>
            <div style={{ marginBottom: "30px", lineHeight: ".10cm" }}>
              <p>React Js</p>
              <ProgressBar animated now={reactjs} label={`${reactjs}%`} style={{ width: "100%", height: "17px" }} />
            </div>
            <div style={{ marginBottom: "30px", lineHeight: ".10cm" }}>
              <p>Express Js</p>
              <ProgressBar animated now={expressjs} label={`${expressjs}%`} style={{ width: "100%", height: "17px" }} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Skill;
