import React from 'react';
import {NavLink} from 'react-router-dom';

const Error=()=>{
    return(
        <>
               <div className="setStyle2">
                   <h1>404 Error page...</h1>
                   <p>Sorry, This page doesn't exist</p>
                   <NavLink to="/" className="lily">Go Back..</NavLink>
               </div> 
        </>
    )
}
export default Error;