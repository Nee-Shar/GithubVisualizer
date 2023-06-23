import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RepoCards({ repo }) {
  return (
    <Container>
      <Row>
        <Col>{repo}</Col>
        {/* Add additional Col components or customize the card layout as needed */}
      </Row>
    </Container>
  );
}

export default RepoCards;
