import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import "./style.css";


const HomeProject = ({ portfolio }) => {
    const { name, live, img } = portfolio;
    return (
        <Col md={4} className="my-4">

            <Zoom bottom cascade duration={1000}>
                <div className="po_item" style={{ backgroundImage: `url(${img})` }}>
                    {/* <img src={img} alt="Placeholder Image" class="img-fluid" /> */}
                    <div className="content">
                        <Zoom bottom cascade duration={3000}>
                            <p className="white-text">{name}</p>
                        </Zoom>
                        <a href={live}>view project</a>
                    </div>
                </div>

            </Zoom>


        </Col >
    );
};

export default HomeProject;