import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Container, Col, Row, Form } from 'react-bootstrap';
import Link from 'next/link';

const WrapperHero = styled.section`
    height: 600px;
`;

const Wrapper = styled.section`
  margin-top: 15em;
  padding: 5em;
  background: #4600FF;
  border-radius: 10px;
`;

const TitleFormFilter = styled.p`
  color: white;
`;

const ButtonFilter = styled.button`
    background-color: #FFE15D;
    color: #4600FF;
    font-size: 1em;
    font-weight: bold;
    padding: 0.25em 5em;
    border: 2px solid #FFE15D;
    border-radius: 30px;
    margin-top: 30px;
    display: block;
`;



function FilterTicketHero() {
    return (
        <>
        <WrapperHero className='hero-wrapper-filter'>
            <Container>
                <Wrapper>
                    <Row>
                        <Col md={4}>
                            <Form.Label htmlFor="inputFrom" style={{color:"white"}}>From</Form.Label>
                            <Form.Control type="text" id="from" aria-describedby="fromText"/>
                        </Col>
                        <Col md={4}>
                            <Form.Label htmlFor="inputTo" style={{color:"white"}}>To</Form.Label>
                            <Form.Control type="text" id="to" aria-describedby="toText"/>
                        </Col>
                        <Col md={4}>
                            <Form.Label htmlFor="date" style={{color:"white"}}>Tanggal</Form.Label>
                            <Form.Control type="date" id="date" aria-describedby="date"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form.Label htmlFor="penumpang" style={{color:"white"}}>Penumpang</Form.Label>
                            <Form.Control type="text" id="penumpang" aria-describedby="penumpang"/>
                        </Col>
                        <Col md={4}>
                            <Form.Label htmlFor="kelas" style={{color:"white"}}>Kelas</Form.Label>
                            <Form.Control type="text" id="kelas" aria-describedby="kelas"/>
                        </Col>
                        <Col md={4}>
                        
                            <ButtonFilter className="mx-auto">Cari</ButtonFilter>
                        </Col>
                    </Row>
                </Wrapper>
            </Container>
        </WrapperHero> 
        <h1 className="text-center">FLIGHT SCHEDULE</h1>
        </>
    );
}

export default FilterTicketHero;
