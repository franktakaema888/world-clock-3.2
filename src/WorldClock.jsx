import Clock from "./Clock.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function WorldClock({clockData}) {
    return (
      <Container>
        <Row>
          <Col><strong>City</strong></Col>
          <Col><strong>Time</strong></Col>
        </Row>
        {clockData.map((zone, index) => (
          <Row key={index}>
            <Col>{zone}</Col>
            <Col><Clock timeZone={zone} /></Col>
          </Row>
        ))}
      </Container>
    );
    
}