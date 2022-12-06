import React from 'react'
import Head from 'next/head'
import FormLogin from '../components/auth/WrapperLogin';
import {useSession, signIn, signOut} from 'next-auth/react'

const Login = () => {
    return (
        <FormLogin />
    );
    // const {data: session} = useSession()
    // console.log(session);
    // if (session){
    // return (
    //     <>
    //     <Head>
    //         <title>Login | E-Flight</title>
    //         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    //     </Head>
    //     <div>
    //         <p>welcome, {session.user.name}</p>
    //         <button onClick={() => signOut()}>Sign Out</button>
    //     </div>
       
    //     </>
    //     );
    // } else {
    //     return(
    //         <div>
    //             <p>youre not login</p>
    //             <button onClick={() => signIn()}>Login</button>
    //         </div>
    //     );
    // }
}

export default Login;