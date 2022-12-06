import React from "react";
import {useSession, signOut, getSession} from 'next-auth/react'
import { redirect } from "next/dist/server/api-utils";
const FilterTicket = () => {
    const { data: session, status } = useSession();

    if (status === 'authenticated'){
        return ( 
            <>
            <div>Ini Filter</div>
            <button onClick={() => signOut()}>Sign Out</button>
            </>
           
         );
    } else {
        return(
            <div>
                <p>youre not sigini</p>
            </div>
        );
    }
    
}
 
export default FilterTicket;

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    if (!session) {
        return{
            redirect: {
                destination: '/login'
            }
        }
    }
    return {
        props: { session }
    };
};