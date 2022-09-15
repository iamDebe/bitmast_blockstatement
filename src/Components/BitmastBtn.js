import React from "react";
import { Link } from "react-router-dom";

const BitmastBtn = (props) => {
     const handleLogin = props.handleLogin
     const classes = 'bg-[#2C318D] text-[1.3rem] text-white  py-3 my-3 ' + props.className
    return ( 
        <>
             <button typeof="button" className={classes} onClick={handleLogin}>{props.children}</button>
        </>
     );
}
 
export default BitmastBtn;
