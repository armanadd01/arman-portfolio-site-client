import React, { useState } from 'react';
import { Button, Container, Offcanvas, Row } from 'react-bootstrap';


const Sidebar = () => {


    return (
        <div className="offcanvas-custom text-center">
            <Container fluid>
                <Row>
                    <h1 className="text-light fs-1">A</h1>
                    <h6 className="text-light">Md. Arman Habib Nahid</h6>
                    <i className="text-info">Web Developer</i>

                </Row>
                <hr />
            </Container>


        </div>
    );
};

export default Sidebar;