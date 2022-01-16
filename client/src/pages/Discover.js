import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/esm/Container';
import NavbarComponent from '../components/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';
import Map from '../components/Map'
import axios from 'axios';
import {nanoid} from 'nanoid';

export default function Discover() {      
    const [charityState, setCharity] = useState([""]);

    useEffect(() => {
        axios.post("/charities").then((response) => {
            setCharity(response.data);
        });
    }, []);

    function displayCharity(){
        let charity = [];
        charity = charityState.map(x=><li key={nanoid()}>
           <h5>{x.name}</h5> 
            <ul><li>{x.description}</li></ul>
        </li>);

        return charity;
    }

    return (
        <div>
            <NavbarComponent/>
            <div className="top-height overflow">
                { displayCharity()}
            </div>
            <Map/>
        </div>
    )
}
