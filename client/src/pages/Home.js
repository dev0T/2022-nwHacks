import React from 'react';
import "./styles.css";
import NavbarComponent from '../components/Navbar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Map from '../components/Map'

export default function Home() {
    return (
        <div>
        <NavbarComponent/>
        <div className='top-height'>
        <Container align="center">
            <Container>
                <h1>Welcome to VanDonates!</h1>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <p>At VanDonates you </p>
                    </Col>
                    <Col>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x400"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x400"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x400"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </Col>
                </Row>
            </Container>
        </Container>
        </div>
        <Map/>
        </div>
    )
}
