import React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function NavbarComponent() {
    return (
        <Container align="center">
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">VanDons</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Discover">Discover</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
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
    )
}
