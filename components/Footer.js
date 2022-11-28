import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const WrapperFooter = styled.section`
    margin-top: 4em;   
    padding: 3em;
    background: #FFB934;
`;
const Line = styled.hr`
    margin-top: 100px;
    border: 0;
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
`;
const NavigationFooter = styled.h4`
    color: #ffffff;
`;
const TextNavigationFooter = styled.p`
    color: #ffffff;
`;
const TextFooter = styled.p`
    color: #ffffff;
    font-size: 15px;
    text-align: center;
`;
function Footer() {
    return (
        <WrapperFooter>
            <Container>
                <Row>  
                    <Col lg={6}>
                        LOGO
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col xs={12} sm={4}>
                                <NavigationFooter>About</NavigationFooter>
                                <TextNavigationFooter>Lorem Ipsum</TextNavigationFooter>
                            </Col>
                            <Col xs={12} sm={4}>
                                <NavigationFooter>Products</NavigationFooter>
                                <TextNavigationFooter>Lorem Ipsum</TextNavigationFooter>
                            </Col>
                            <Col xs={12} sm={4}>
                                <NavigationFooter>Social</NavigationFooter>
                                <TextNavigationFooter>Lorem Ipsum</TextNavigationFooter>
                            </Col>
                        </Row>
                    </Col>
                </Row> 
                <Line />
                <TextFooter>E-Flight for Final Project</TextFooter>
            </Container>
        </WrapperFooter>
    );
}

export default Footer;