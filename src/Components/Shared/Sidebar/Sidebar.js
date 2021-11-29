import React, { useState } from 'react';
import { Button, Container, Nav, Offcanvas, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {


    return (
        <div className="offcanvas-custom text-center ">
            <Container fluid>
                <Row>
                    <h1 className="text-light heading">A</h1>
                    <h6 className="text-light">Md. Arman Habib Nahid</h6>
                    <i className="text-info">Web Developer</i>
                </Row>

                <hr />
                <Row>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link >
                            <NavLink activeClassName="border-bottom border-mi border-5 rounded-bottom text-mi fw-bold" className="nav-link fs-6 border-5 border-transparent text-mi" to="/home">Home</NavLink>
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink activeClassName="border-bottom border-mi border-5 rounded-bottom text-mi fw-bold" className="nav-link fs-6 border-5 border-transparent text-mi" to="/portfolio">Portfolio</NavLink>
                        </Nav.Link>
                        <Nav.Link >Link</Nav.Link>
                        <Nav.Link  >
                            <Nav.Link >
                                <a href=""> Resume</a>
                            </Nav.Link>
                        </Nav.Link>
                    </Nav>
                </Row>
            </Container>


        </div>
    );
};

export default Sidebar;