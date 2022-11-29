import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Frame1 from "../../assets/frame-1.png"
import Frame2 from "../../assets/frame-2.png"
import Frame3 from "../../assets/frame-3.png"
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';


function Benefits() {
    return (
        <>
       <Container>
            <Row>
                <Col lg={6}>
                    <Image src={Frame1} alt="frame 1" className='mx-auto'/>
                </Col>
                <Col lg={6} id="right">
                    Teks
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    teks
                </Col>
                <Col lg={6}>
                    <Image src={Frame2} alt="frame 2" className='mx-auto'/>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <Image src={Frame3} alt="frame 3" className='mx-auto'/>
                </Col>
                <Col lg={6}>
                    teks
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Benefits;