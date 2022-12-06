import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { FaGoogle } from 'react-icons/fa';
import Link from 'next/link';
import {useSession, signIn, signOut} from 'next-auth/react'


const BodyLogin = styled.section`
    background: #fff;
    height: 1000px;
`;

const WrapperFormLogin = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: #4600FF;
    color: white;
    border-radius: 10px;
    padding: 40px 80px
`;
const TitleLogin = styled.h3`
    color: white;
`;


const ButtonLogin = styled.button`
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

const ButtonLoginGoogle = styled.button`
    background-color: #FFFFFF;
    color: #000000;
    font-size: 1em;
    font-weight: bold;
    padding: 0.25em 5em;
    border: 2px solid #FFFFFF;
    border-radius: 30px;
    margin-right: 10px;
    display: block;
`;

const TextBottomLogin = styled.p`
    font-size: 13px;
    color: #FFFFFF;
`;

const TextSignUp = styled.a`
    font-size: 13px;
    color: #FFE15D;
    display: inline-block;
`;
function FormLogin() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
      const {data: session} = useSession()
      console.log(session);
      if (session){
  return (
    <div>
    <p>welcome, {session.user.name}</p>
    <button onClick={() => signOut()}>Sign Out</button>
</div>

  );
}
else {
    return(
        <>
        <BodyLogin>
            <WrapperFormLogin>
            <TitleLogin style={{textAlign: "center"}}>Sign In</TitleLogin>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                <ButtonLogin className='mx-auto' style={{textAlign: "center"}}>Sign In</ButtonLogin>
            </Form>
            <ButtonLoginGoogle className='mx-auto mt-3' style={{textAlign: "center"}} onClick={() => signIn()}>Login with Google <FaGoogle /></ButtonLoginGoogle>
            <TextBottomLogin className='text-center mt-4'>If you dont have account, <Link href="/signup">Sign Up Here</Link></TextBottomLogin>
        </WrapperFormLogin>
    </BodyLogin>
    </>
        // <div>
        //     <p>youre not login</p>
        //     <button onClick={() => signIn()}>Login</button>
        // </div>
    );
}
}

export default FormLogin