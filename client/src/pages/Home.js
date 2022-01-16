import React from 'react';
import NavbarComponent from '../components/Navbar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';


export default function Home() {
    return (
        <div>
        <NavbarComponent/>
        <Container align="center">
            <Container>
                Welcome to VanDons!
            </Container>
            <Container>
                <Row>
                    <Col>
                        Pane 1
                    </Col>
                    <Col>
                        Pane 2
                    </Col>
                </Row>
            </Container>
        </Container>
        </div>
    )
}
