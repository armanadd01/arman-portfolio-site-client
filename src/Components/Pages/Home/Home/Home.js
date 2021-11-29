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
            <Banner></Banner>
            {/* <HomeProjects></HomeProjects> */}

            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;