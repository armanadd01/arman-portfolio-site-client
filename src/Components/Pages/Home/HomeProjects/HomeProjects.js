import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeProject from '../HomeProject/HomeProject';

const HomeProjects = () => {
    const [mobiles, setMobile] = useState([]);

    //get all plans
    useEffect(() => {
        fetch('https://thawing-meadow-71532.herokuapp.com/mobiles/')
            .then(res => res.json())
            .then(data => setMobile(data))
    }, [setMobile]);
    return (
        <div className="py-5 px-5 text-center text-mi" style={{ backgroundColor: '#71DFE7' }}>
            <Container>
                <Row>
                    <Col>
                        <h1>See Our All Mobiles</h1>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    {
                        // map  data
                        mobiles.map(mobile => <HomeProject
                            key={mobile._id}
                            mobile={mobile}
                        ></HomeProject>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HomeProjects;