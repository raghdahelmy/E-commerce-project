import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.svg"
import Form from 'react-bootstrap/Form';
import { InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Navs() {
    return (
        <>
            <Navbar expand="lg" className="bg-transparent navs">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} title="logo" className="logo-img ms-1" alt="Logo" />
                    </Navbar.Brand>
                    <InputGroup className="position-relative w-50 " >
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="search"
                        />

                        <a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#c431bf", }} className="search-icon" /> </a>
                    </InputGroup>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto categories">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#iphone">iphone</Nav.Link>
                            <Nav.Link href="#Android">Android</Nav.Link>
                            <Nav.Link href="#accessories">Accessories</Nav.Link>
                            <Nav.Link href="#contactUs">contact us</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                    <Nav.Link href="#login">
                        <FontAwesomeIcon icon={faUser} style={{ margin: "7px", color: "#CB48C6", }} />
                    </Nav.Link>

                    <Nav.Link href="#whichList">
                        <FontAwesomeIcon icon={faHeart} style={{ margin: "7px", color: "#CB48C6", }} />
                    </Nav.Link>
                    <Nav.Link href="#cart">
                        <FontAwesomeIcon icon={faCartShopping} style={{ margin: "7px", color: "#CB48C6", }} />
                    </Nav.Link>
                </Container>
            </Navbar>
        </>
    );
}
export default Navs;
