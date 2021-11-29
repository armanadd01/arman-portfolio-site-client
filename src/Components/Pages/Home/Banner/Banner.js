import React from 'react';
// import { Fade, Slide } from 'react-reveal';
import Slide from 'react-reveal/Slide';
import { Button, Col, Container, Row } from 'react-bootstrap';


const Banner = () => {


    const handleMouseEnter = e => {
        e.target.style.color = "#00C9EE"
    }
    const handleMouseLeave = e => {
        e.target.style.color = "white"
    }
    return (
        <div className=" " style={{ backgroundColor: '#009DAE' }}>
            <Container className=" px-5 ">
                <Row>
                    <Col md={8} className="py-5 px-5 ">



                        <h1 className="heading-1 ">
                            <Slide cascade left>
                                <span
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >H</span>
                                <span
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >I</span>
                                <span
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >,</span>
                            </Slide>

                        </h1>
                        <h2 className="py-1 heading-2">
                            <Slide cascade left triggerOnce>
                                I'm Arman Habib Nahid

                            </Slide>
                        </h2>
                        <h2 className="py-2 heading-3">
                            <Slide cascade left triggerOnce>
                                Web developer
                            </Slide>
                        </h2>

                        <Button variant="outline-danger">Danger</Button>

                    </Col>
                    <Col md={2}>
                        <Slide cascade right triggerOnce>
                            <img className="h-75 animate__backInRight" src="https://i.ibb.co/qsvPy02/IMG-20200816-151706-02-removebg-preview.png" alt="" />
                        </Slide>

                    </Col>
                </Row>

            </Container>
        </div >
    );
};

export default Banner;