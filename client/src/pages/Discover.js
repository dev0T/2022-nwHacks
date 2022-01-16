import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import NavbarComponent from '../components/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';
import Map from '../components/Map'

export default function Discover() {      

    return (
        <div>
            <NavbarComponent/>
            <div className="top-height">
                <Container align="center">
                    <Row height="300px">
                        <Col>1 of 3
                            <br></br>
                        </Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
            </div>
            <Map/>
        </div>
    )
}
