import React from 'react';
import "./styles.css"
import Container from 'react-bootstrap/esm/Container';
import NavbarComponent from '../components/Navbar';

export default function Contact() {
    return (
        <div>
            <NavbarComponent/>
            <Container align="center">
                <h1>Contact Us</h1>
                <p>If you have any questions please send us a message through our chat system below!</p>
            </Container>
        </div>
    )
}
