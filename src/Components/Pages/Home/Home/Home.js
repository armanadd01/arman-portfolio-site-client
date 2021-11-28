import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import Banner from '../Banner/Banner';
import HomeContact from '../HomeContact/HomeContact';
import HomeProject from '../HomeProject/HomeProject';
import HomeProjects from '../HomeProjects/HomeProjects';

const Home = () => {
    return (
        <div className="page-outer">
            <Container fluid >
                <Row >
                    <Col md={1}>
                        <Sidebar></Sidebar>
                    </Col>
                    <Col md={11} >
                        <Banner></Banner>
                        <HomeProjects></HomeProjects>
                        <HomeProject></HomeProject>
                        <HomeContact></HomeContact>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Home;