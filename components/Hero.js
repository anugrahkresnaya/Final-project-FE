import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import HeroImg from "../assets/hero.png"
import styled from 'styled-components';

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
            <div className='row'>
                <div className='col-lg-6 col-12'>
                    <Image src={HeroImg} alt="Hero" className='mx-auto' width={500} height={500}/>
                </div>
                <div className='col-lg-6 col-12'>
                    <TextHero>Lorem Ipsum Dolor Sit Amet</TextHero>
                </div>
            </div>
        </Container>

        </>
);
}

export default Hero;
