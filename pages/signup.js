import React from 'react'
import Head from 'next/head'
import FormSignUp from '../components/auth/WrapperSignUp';

const SignUp = () => {
    return (
        <>
        <Head>
            <title>Sign Up | E-Flight</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <FormSignUp />
        </>
    );
}
export default SignUp;