import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function Footer() {
  return (
    <Container className="p-5" style={{ backgroundColor: "#1f2937" }}>
      <Row>
        <Col className="text-center">
          <h5>Create with ❤ by Samotuho Ndruru</h5>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
