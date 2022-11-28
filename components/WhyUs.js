import React from 'react';
import { Row, Container, Col, Accordion } from 'react-bootstrap';
import styled from 'styled-components';

const TextLeft = styled.h1`
  font-size: 1.5em;
  color: white;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: #2D80EC;
  border-radius: 10px;
`;
function WhyUs() {
    return (
        <Container>
            <Wrapper>
                <Row>
                    <Col lg={6}>
                        <TextLeft>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum massa et tortor congue, eleifend vestibulum magna congue. Etiam suscipit justo velit, at accumsan dolor commodo ac.</TextLeft>
                    </Col>
                    <Col lg={6}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Wrapper>
        </Container>
    );
}

export default WhyUs;