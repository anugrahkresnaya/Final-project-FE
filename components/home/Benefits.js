import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Frame1 from "../../assets/frame-1.png"
import Frame2 from "../../assets/frame-2.png"
import Frame3 from "../../assets/frame-3.png"
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const SectionBenefits = styled.section`
    padding: 35px;
    padding-top: 50px;
`;

const Scrollable = styled.div`
    overflow-y:scroll; 
    height:250px; 
    background: white;
`;

const TitleBenefits = styled.h1`
    color: #000000;
    font-size: 25px;
    padding-top: 80px;
`;

function Benefits() {
    return (
        <>
       <Container>
        <SectionBenefits>
            <Row>
                <Col lg={6}>
                    <Image src={Frame1} alt="frame 1" className='mx-auto'/>
                </Col>
                <Col lg={6} id="right">
                    
                    <TitleBenefits>Pesan Tiket dan Rencanain Liburan Jadi Gampang</TitleBenefits>
                    <Scrollable>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Scrollable>
                </Col>
            </Row>
        </SectionBenefits>
        <SectionBenefits>
            <Row>
                <Col lg={6}>
                    <TitleBenefits>Banjir Promo dan Benefit, Liburan Jadi Hemat!</TitleBenefits>
                    <Scrollable>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Scrollable>
                </Col>
                <Col lg={6}>
                    <Image src={Frame2} alt="frame 2" className='mx-auto'/>
                </Col>
            </Row>
        </SectionBenefits>
        <SectionBenefits>
            <Row>
                <Col lg={6}>
                    <Image src={Frame3} alt="frame 3" className='mx-auto'/>
                </Col>
                <Col lg={6}>
                    <TitleBenefits>Dapatkan Harga Tiket Pesawat Murah ke Destinasi Favorit Anda</TitleBenefits>
                    <Scrollable>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Scrollable>
                </Col>
            </Row>
        </SectionBenefits>
        </Container>
        </>
    );
}
export default Benefits;