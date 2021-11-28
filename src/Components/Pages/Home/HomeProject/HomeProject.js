import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeProject = ({ mobile }) => {
    // const { Price, name, img } = mobile;
    return (
        <Col md={4} className="my-4">
            <Card style={{ width: '100%' }}>
                <Card.Img style={{ height: '13rem' }} variant="top" src={mobile?.img} />
                <Card.Body>
                    <Card.Title className="text-danger"> <h2 className="fw-bold">{mobile?.name}</h2></Card.Title>
                    <Card.Text className="fs-5">
                        <h6 className="text-primary fs-5 fw-bold">price: <span className="text-danger fs-6">BDT {mobile?.Price}</span></h6>
                        <hr />
                    </Card.Text>
                    <Card.Text>

                    </Card.Text>

                    <Button variant="outline-danger" size="sm">Add Order </Button>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default HomeProject;