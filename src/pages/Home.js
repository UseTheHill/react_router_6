import styles from "./Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container className={styles.home_container}>
      <Row className={styles.home_row1}>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}
