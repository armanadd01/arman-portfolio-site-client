import React from 'react';
// import { Fade, Slide } from 'react-reveal';
import Typical from "react-typical";
import Slide from 'react-reveal/Slide';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Banner.css";



const Banner = () => {


    const handleMouseEnter = e => {
        e.target.style.color = "#00C9EE"
    }
    const handleMouseLeave = e => {
        e.target.style.color = "white"
    }
    return (
        <div className="" style={{ backgroundColor: '#009DAE' }}>
            <Container fluid className=" section">


                <section id="home" className="home">

                    <div className="intro_sec d-block d-lg-flex align-items-center ">
                        <div
                            className="h_bg-image order-1 order-lg-2 h-100 "
                            style={{
                                backgroundImage: `url(https://i.ibb.co/n6MHr8k/IMG-20200109-113953-042-1-1.jpg)`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "auto",
                            }}
                        ></div>
                        <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
                            <div className="align-self-center ">
                                <div className="intro mx-auto">
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
                                    <h2 className="mb-1x heading-2">Arman Habib Nahid</h2>
                                    <h1 className="fluidz-48 mb-1x">
                                        <Typical
                                            steps={[
                                                "I love coding",
                                                1000,
                                                "I code cool websites",
                                                1000,
                                                "I develop mobile apps",
                                                1000,
                                            ]}
                                            loop={Infinity}
                                            wrapper="p"

                                        />
                                    </h1>
                                    <p className="mb-1x">I Love Coding</p>
                                    <div className="intro_btn-action pb-5">
                                        <Link to="/portfolio" className="text_2">
                                            <div id="button_p" className="ac_btn btn ">
                                                My Portfolio
                                                <div className="ring one"></div>
                                                <div className="ring two"></div>
                                                <div className="ring three"></div>
                                            </div>
                                        </Link>
                                        <Link to="/contact">
                                            <div id="button_h" className="ac_btn btn">
                                                Contact Me
                                                <div className="ring one"></div>
                                                <div className="ring two"></div>
                                                <div className="ring three"></div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Container>
        </div >
    );
};

export default Banner;