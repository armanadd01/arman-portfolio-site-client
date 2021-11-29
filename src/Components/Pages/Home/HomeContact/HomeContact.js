import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Fade, Slide } from "react-reveal";
import emailjs from 'emailjs-com';

const HomeContact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_89ywtwh', 'template_u0818hq', form.current, 'user_FfaB0Tgp589OmipVTAbQA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Container fluid className="bg-info py-5 px-5">
            <Fade bottom duration={1000}>
                <Row className="me-5 pe-5 text-center">
                    <Col md={12} className="">
                        <h1>
                            <span>Get In Touch.</span>
                        </h1>
                    </Col >

                    <Col className="">
                        <p className="lead">As</p>
                    </Col>
                </Row>
            </Fade>

            <Row className="row">

                <Col md={6} className="">
                    <Slide left duration={1000}>
                        <div className="form-section text-center test-light">
                            <h1 className="text-light">Send Your Email</h1>
                            <div className="form">
                                <form ref={form} onSubmit={sendEmail}>
                                    <label>Name</label>
                                    <input type="text" name="user_name" />
                                    <label>Email</label>
                                    <input type="email" name="user_email" />
                                    <label>Message</label>
                                    <textarea name="message" />
                                    <input type="submit" value="Send" />
                                </form>
                            </div>
                        </div>

                    </Slide>
                </Col>

                <Col md={6} className="four columns footer-widgets">
                    <Slide right duration={1000}>
                        <div className="widget widget_contact">
                            <h4>Address and Phone</h4>
                            <p className="address">
                                Address Name
                                <br />
                                khilkhet <br />
                                Dhaka, Dhaka 1229
                                <br />
                                <span>(880) 1878-959657 </span>
                            </p>
                        </div>

                        <div className="widget widget_tweets">
                            <h4 className="widget-title">Latest Tweets</h4>
                            <ul id="twitter">
                                <li>
                                    <span>
                                        This is Photoshop's version of Lorem Ipsum. Proin gravida
                                        nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                                        quis bibendum auctor, nisi elit consequat ipsum
                                        <a href="./">http://t.co/CGIrdxIlI3</a>
                                    </span>
                                    <b>
                                        <a href="./">2 Days Ago</a>
                                    </b>
                                </li>
                                <li>
                                    <span>
                                        Sed ut perspiciatis unde omnis iste natus error sit
                                        voluptatem accusantium doloremque laudantium, totam rem
                                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                                        quasi
                                        <a href="./">http://t.co/CGIrdxIlI3</a>
                                    </span>
                                    <b>
                                        <a href="./">3 Days Ago</a>
                                    </b>
                                </li>
                            </ul>
                        </div>
                    </Slide>
                </Col>
            </Row>
            <section class="ftco-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6 text-center mb-5">
                            <h2 class="heading-section">Contact Form #03</h2>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-12">
                            <div class="wrapper">
                                <div class="row mb-5">
                                    <div class="col-md-3">
                                        <div class="dbox w-100 text-center">
                                            <div class="icon d-flex align-items-center justify-content-center">
                                                <span class="fa fa-map-marker"></span>
                                            </div>
                                            <div class="text">
                                                <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="dbox w-100 text-center">
                                            <div class="icon d-flex align-items-center justify-content-center">
                                                <span class="fa fa-phone"></span>
                                            </div>
                                            <div class="text">
                                                <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="dbox w-100 text-center">
                                            <div class="icon d-flex align-items-center justify-content-center">
                                                <span class="fa fa-paper-plane"></span>
                                            </div>
                                            <div class="text">
                                                <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="dbox w-100 text-center">
                                            <div class="icon d-flex align-items-center justify-content-center">
                                                <span class="fa fa-globe"></span>
                                            </div>
                                            <div class="text">
                                                <p><span>Website</span> <a href="#">yoursite.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row no-gutters">
                                    <div class="col-md-7">
                                        <div class="contact-wrap w-100 p-md-5 p-4">
                                            <h3 class="mb-4">Contact Us</h3>
                                            <div id="form-message-warning" class="mb-4"></div>
                                            <div id="form-message-success" class="mb-4">
                                                Your message was sent, thank you!
                                            </div>
                                            <form ref={form} onSubmit={sendEmail} class="contactForm">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="label" for="name">Full Name</label>
                                                            <input type="text" class="form-control" name="name" id="name" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="label" for="email">Email Address</label>
                                                            <input type="email" class="form-control" name="email" id="email" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label class="label" for="subject">Subject</label>
                                                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label class="label" for="#">Message</label>
                                                            <textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <input type="submit" value="Send Message" class="btn btn-primary" />
                                                            <div class="submitting"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-md-5 d-flex align-items-stretch">
                                        <div class="info-wrap w-100 p-5 img" style={{

                                            backgroundImage: "url(https://i.ibb.co/cYpQ4hP/linkedin-sales-solutions-0-Qv-Typ0g-H3-A-unsplash-1.jpg)",
                                            backgroundPosition: "center",
                                            backgroundSize: "cover"
                                        }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container >

    );
};

export default HomeContact;