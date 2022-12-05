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
const Blur = styled.div`
filter: blur(20px);

`;
const Scrollable = styled.div`
    direction: rtl;
    overflow-y:scroll; 
    height:250px; 
    background: white;
    &::-webkit-scrollbar {
        width: 5px;
        border: 1px solid #fff;
        background: #f4f7fe;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #4600FF;
    }
   
    
`;

const TitleBenefits = styled.h1`
    color: #000000;
    font-size: 20px;
    padding-top: 80px;
`;

const DescBoldBenefits = styled.p`
    direction: ltr;
    font-size: 12px;
    font-weight: bold;
    padding-left: 20px;
`;
const DescBenefits = styled.p`
    direction: ltr; 
    font-size: 12px;
    padding-left: 20px;
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
                <Col lg={6}>
                    
                    <TitleBenefits>Pesan Tiket dan Rencanain Liburan Jadi Gampang</TitleBenefits>
                    <Scrollable>
                        <Blur></Blur>
                        <DescBoldBenefits>Mudahnya Pesan Tiket Pesawat</DescBoldBenefits>
                        <DescBenefits>Pesan tiket sekaligus hotel dengan mudah dan cepat. Tidak perlu risau, hanya dengan satu sentuhan jari, tiket dan hotel yang kamu butuhkan bisa didapatkan dengan mudah.</DescBenefits>
                        <DescBoldBenefits>Banyak Pilihan Produk Terbaik. </DescBoldBenefits>
                        <DescBenefits>Ada banyak pilihan maskapai dengan rute terlengkap ke seluruh dunia. Tersedia juga banyak pilihan hotel di Asia. Kamu juga bisa cari tiket kereta ke berbagai rute, sewa mobil, dan pesan tiket hiburan.</DescBenefits>
                        <DescBoldBenefits>Banyak Pilihan Cara Pembayaran. </DescBoldBenefits>
                        <DescBenefits>Saat transaksi di tiket.com, kamu bisa memilih cara pembayaran sesuai keinginan. Ada pilihan pembayaran via bank transfer, ATM transfer, Virtual Account (VA), kartu debit online, maupun kartu kredit. Bisa dicicil juga, lho. Prosesnya mudah dan simpel!</DescBenefits>
                    </Scrollable>
                </Col>
            </Row>
        </SectionBenefits>
        <SectionBenefits>
            <Row>
                <Col lg={6}>
                <TitleBenefits>Pesan Tiket dan Rencanain Liburan Jadi Gampang</TitleBenefits>
                    <Scrollable>
                        <Blur></Blur>
                        <DescBoldBenefits>Banyak Promo Spesial.</DescBoldBenefits>
                        <DescBenefits>Banyak promo untuk tiket & hotel kesayanganmu. Dapatkan diskon harga terbaik agar bujet liburan kamu semakin hemat. Tidak ada alasan lagi untuk menunda liburan kamu.</DescBenefits>
                        <DescBoldBenefits>Benefit tiket Elite Rewards. </DescBoldBenefits>
                        <DescBenefits>Dapatkan benefit tiket Elite Rewards berupa tiket Points yang bisa kamu tukarkan dengan diskon. Juga berbagai benefit eksklusif sesuai produk yang kamu beli!</DescBenefits>
                        <DescBoldBenefits>24/7 Customer Care.</DescBoldBenefits>
                        <DescBenefits>Melalui pelayanan 24/7 Customer Care, kami akan selalu ada buat kamu. Dapatkan bantuan untuk pemesanan hotel dan tiketmu dengan pelayanan 24/7 Customer Care dari tiket.com.</DescBenefits>
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