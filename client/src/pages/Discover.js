import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import NavbarComponent from '../components/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './styles.css';

export default function Discover() {      
    const mapStyles = {        
        height: "55vh",
        width: "100%"};
      
    const defaultCenter = {
        lat: 49.246292, lng: -123.116226
    }

    return (
        <div>
            <NavbarComponent/>
            <div className="top-list">
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
            <LoadScript
                    googleMapsApiKey='AIzaSyC1rycEYIqN7rGl1UDg89FC91T6mn1abUw'>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}
                />
            </LoadScript>
        </div>
    )
}
