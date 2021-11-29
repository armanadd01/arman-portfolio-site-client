import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const HomeProject = ({ portfolio }) => {
    const { name, live, img } = portfolio;
    return (
        <Col md={4} className="my-4">
            <div class="gallery">
                <Zoom bottom cascade duration={1000}>
                    <div className="view overlay hm-black-light gallery-item">
                        <img src={img} alt="Placeholder Image" class="img-fluid" />
                        <div className="mask flex-center">
                            <Zoom bottom cascade duration={3000}>
                                <p className="white-text">{name}</p>
                            </Zoom>
                        </div>
                    </div>
                </Zoom>
            </div>

        </Col >
    );
};

export default HomeProject;