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
        <div className='top-height overflow'>
        <Container align="center">
            <Container>
                <h1>Welcome to VanDonates!</h1>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo massa, sodales sed justo vel, pellentesque vehicula dui. Nulla facilisi. Curabitur sed est feugiat, maximus sem ut, condimentum dui. Nunc bibendum venenatis massa, eu sagittis est tincidunt sed. Praesent vitae lorem tempus, faucibus ex sit amet, mollis ipsum. Nam vitae velit eu nulla pharetra ornare. Mauris et euismod felis, sit amet placerat ante. Proin laoreet bibendum lectus, ornare fringilla nunc mattis a. Praesent dictum rutrum condimentum. </p>
                    </Col>
                    <Col>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://source.unsplash.com/random/800x399/?fruit"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <div className='glass'>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div> 
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://source.unsplash.com/random/800x401/?fruit"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <div className='glass'>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://source.unsplash.com/random/800x400/?fruit"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <div className='glass'>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
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
