import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Button, Col, Container, Row } from 'react-bootstrap';


const Banner = () => {
    return (
        <div className=" " style={{ backgroundColor: '#009DAE' }}>
            <Container className=" px-5 ">
                <Row>
                    <Col md={8} className="py-5 px-5 ">
                        <Slide cascade left triggerOnce>


                            <h1 className="py-5 ">

                                Hi ,


                            </h1>
                            <h2 className="py-5 ">

                                I'm Arman Habib Nahid


                            </h2>
                            <h2 className="py-5 ">Web developer</h2>

                            <Button className="py-5 " variant="outline-danger">Danger</Button>

                        </Slide>
                    </Col>
                    <Col md={2}>

                        <img className="h-75 animate__backInRight" src="https://i.ibb.co/qsvPy02/IMG-20200816-151706-02-removebg-preview.png" alt="" />
                    </Col>
                </Row>

            </Container>
        </div >
    );
};

export default Banner;