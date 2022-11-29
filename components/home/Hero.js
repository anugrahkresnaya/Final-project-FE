import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import HeroImg from "../../assets/hero.png"
import styled from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';

const TextHero = styled.h1`
    color: black;
    font-size: 1.5em;    
    padding: 10em 5em;
    display: block;
`;

function Hero() {
    return (
        <>
        <Container>
            <Row>
                <Col lg={6}>
                    <Image src={HeroImg} alt="Hero" className='mx-auto' width={500} height={500}/>
                </Col>
                <Col lg={6}>
                    <TextHero>Lorem Ipsum Dolor Sit Amet</TextHero>
                </Col>
            </Row>
        </Container>

        </>
);
}

export default Hero;
