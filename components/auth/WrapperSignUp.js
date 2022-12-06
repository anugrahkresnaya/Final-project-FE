import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { FaGoogle } from 'react-icons/fa';
import Link from 'next/link';
import Head from 'next/head';


const BodySignUp = styled.section`
    background: #fff;
    height: 1000px;
`;

const WrapperFormSignUp = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: #4600FF;
    color: white;
    border-radius: 10px;
    padding: 40px 100px
`;
const TitleSignUp = styled.h3`
    color: white;
`;


const ButtonSignUp= styled.button`
    background-color: #FFE15D;
    color: #4600FF;
    font-size: 1em;
    font-weight: bold;
    padding: 0.25em 5em;
    border: 2px solid #FFE15D;
    border-radius: 30px;
    margin-right: 10px;
    display: block;
`;

const TextBottomSignUp = styled.p`
    font-size: 13px;
    color: #FFFFFF;
`;

function FormSignUp() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
  return (
    <>
    <BodySignUp>
        <WrapperFormSignUp>
        <TitleSignUp style={{textAlign: "center"}}>Sign Up</TitleSignUp>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" required>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Input name" controlId="name" required/>
                <Form.Control.Feedback type="invalid">Please fill the name!</Form.Control.Feedback>
                
            </Form.Group>
            <Form.Group className="mb-3" required>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Input email" controlId="email" required/>
                <Form.Control.Feedback type="invalid">Please fill the email!</Form.Control.Feedback>
                <p style={{fontSize:"13px"}}>We'll never share your email with anyone else.</p>
            </Form.Group>
            <Form.Group className="mb-3" required>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Input password" controlId="password" required />
                <Form.Control.Feedback type="invalid">Please fill the password!</Form.Control.Feedback>
            </Form.Group>
            <ButtonSignUp className='mx-auto' style={{textAlign: "center"}}>Sign Up</ButtonSignUp>
        </Form>
        
        <TextBottomSignUp className='text-center mt-4'>Already have account?, <Link href="/login">Sign In Here</Link></TextBottomSignUp>
    </WrapperFormSignUp>
</BodySignUp>
</>
  );
}

export default FormSignUp