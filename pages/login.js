import React from 'react'
import Head from 'next/head'
import FormLogin from '../components/auth/WrapperLogin';

const Login = () => {
    return (
        <>
        <Head>
            <title>Login | E-Flight</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
       <FormLogin />
        </>
    );
}

export default Login;