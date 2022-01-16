import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import NavbarComponent from "../components/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./styles.css";
import Map from "../components/Map";
import {
  getAllCharities,
  getCharitiesByClassification,
  getCharitiesByName,
} from "../service";
import { nanoid } from "nanoid";

export default function Discover () {
    const [isEnabled, setIsEnabled] = useState(true);
    const [selectedDropdown, setSelectedDropdown] = useState("Display All");
    const [searchValue, setSearchValue] = useState("");
    const [foundCharities, setFoundCharities] = useState([]);

    function displayCharity () {
        let charity = [];
        charity = foundCharities.map((x) => (
            <li key={nanoid()}>
                <h5>{x.name}</h5>
                <ul>
                    <li>{x.description}</li>
                </ul>
            </li>
        ));
        return charity;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsEnabled(false);

        switch (selectedDropdown) {
            case "Display All":
                setFoundCharities(await getAllCharities());
                break;
            case "By Name":
                setFoundCharities(await getCharitiesByName(searchValue));
                break;
            case "By Category":
                setFoundCharities(await getCharitiesByClassification(searchValue));
                break;
            default:
                break;
        }

        setIsEnabled(true);
    };

    console.log(foundCharities);

    const onSelect = (eventKey) => {
        setSelectedDropdown(eventKey);
    };

    const onChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <div>
            <NavbarComponent />
            <div className="top-height">
                <Container align="center">
                    <Form className="d-flex">
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-label="Text input with dropdown button"
                                onChange={onChange}
                            />
                            <DropdownButton
                                variant="outline-secondary"
                                title={selectedDropdown}
                                id="input-group-dropdown-2"
                                align="end"
                                onSelect={onSelect}>
                                <Dropdown.Item href="#" eventKey="Display All">
                                    Display All
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#" eventKey="By Name">
                                    By Name
                                </Dropdown.Item>
                                <Dropdown.Item href="#" eventKey="By Category">
                                    By Category
                                </Dropdown.Item>
                            </DropdownButton>
                            <Button
                                variant="outline-success"
                                onClick={handleSubmit}
                                disabled={!isEnabled}>
                                Search
                            </Button>
                        </InputGroup>
                    </Form>

                    <div className="top-height overflow">{displayCharity()}</div>
                </Container>
            </div>
            <Map />
        </div>
    );
}