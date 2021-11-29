import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeProject from '../HomeProject/HomeProject';
import Bounce from 'react-reveal/Bounce';

const portfolios = [
    {
        id: 1,
        name: 'Xiaomi Mobile Store React Demo',
        img: 'https://i.ibb.co/6bLQG1q/Screenshot-21.png',
        live: '#',
        github: '#',
        server: '#',
    },
    {
        id: 2,
        name: 'Travel React Demo ',
        img: 'https://i.ibb.co/hBZn0cd/Screenshot-25.png',
        live: '#',
        github: '#',
        server: '#',
    },
    {
        id: 3,
        name: 'Shohag Security WordPress site',
        img: 'https://i.ibb.co/D7Gv5Tt/Screenshot-22.png',
        live: '#',
        github: '#',
        server: '#',
    },
    {
        id: 4,
        name: 'Sanzu Mia Portfolio Custom WordPress theme',
        img: 'https://i.ibb.co/cwnt4V0/Screenshot-24.png',
        live: '#',
        github: '#',
        server: '#',
    },
    {
        id: 5,
        name: 'Marketers Section Custom WordPress theme',
        img: 'https://i.ibb.co/ZdcQpYy/Screenshot-26.png',
        live: '#',
        github: '#',
        server: '#',
    },
    {
        id: 6,
        name: 'Clipping World WordPress',
        img: 'https://i.ibb.co/VCdrXg6/Screenshot-27.png',
        live: '#',
        github: '#',
        server: '#',
    },
    {
        id: 7,
        name: 'Cut Out Image WordPress Conversion ',
        img: 'https://i.ibb.co/ZdcQpYy/Screenshot-26.png',
        live: '#',
        github: '#',
        server: '#',
    },
    {
        id: 8,
        name: 'Power SME Solution WordPress',
        img: 'https://i.ibb.co/DbbWFP6/Screenshot-23.png',
        live: '#',
        github: '#',
        server: '#',
    },
]

const HomeProjects = () => {

    return (
        <div className="py-5 px-5 text-center text-mi" style={{ backgroundColor: '#71DFE7' }}>
            <Container>
                <Row>
                    <Col>
                        <h1>
                            <Bounce top cascade>
                                See My Some Project
                            </Bounce>
                        </h1>
                        <hr />
                    </Col>
                </Row>
                <Row >
                    {
                        // map  data
                        portfolios.map(portfolio => <HomeProject
                            key={portfolio.id}
                            portfolio={portfolio}
                        ></HomeProject>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HomeProjects;