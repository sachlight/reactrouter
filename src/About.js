import React from 'react';
import {NavLink} from 'react-router-dom';
const About=()=>{
    return(

        <>
            <div className="setStyle3">
                <h1>About Page.....</h1>
                <br />
                <NavLink to="/" className="lily">Go Back To Home</NavLink>
            </div>
        </>
    )
}
export default About;