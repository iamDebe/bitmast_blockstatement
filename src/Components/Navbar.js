import React, { useState } from "react";
import {Link} from "react-router-dom"
import { useCookies } from "react-cookie";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {
        const [cookies, setCookies] = useCookies(['user']);
        const [nav, setNav] = useState(true);

        const toggleNav = ()=>{
                setNav(!nav)
        }



    return ( 
        <>
            <header className="w-full fixed top-0   bg-white z-50 shadow-md">
               

                    <nav className="nav md:flex justify-between items-center mx-auto max-w-[1200px] px-4 ">
                        <Link to="/faq" className=" "><img src="/assets/images/logo.jpeg" className="w-[100px] my-4 " alt="nav__brand" /></Link>
                       
                       
                            <ul className={nav?"nav__item md:block hidden md:flex md:items-center transtion-all duration-500 ease-in-out" : "nav__item  md:flex md:items-center transtion-all duration-500 ease-in-out"} >
                                <li className="nav__list p-4 font-bold text-xl"><Link to="/faq" className="hover:text-[#2C318D]">Home</Link> </li>
                                <li className="nav__list p-4 font-bold text-xl"><Link to="/register" className="hover:text-[#2C318D]">Register</Link> </li>
                                {typeof cookies.user != 'undefined' ?
                                <>
                                  
                                  <li className="nav__list p-4 font-bold text-xl"><Link to="/logout" className="hover:text-[#2C318D]">Logout</Link> </li>
                                </>
                                :   
                                <>
                                  <li className="nav__list p-4 font-bold text-xl"><Link to="/login" className="hover:text-[#2C318D]">Login</Link> </li>

                                </>
                                    
                                }
                               
                                {/* <li className="nav__list p-4 font-bold text-xl"><Link to="/withdraw" className="hover:text-[#2C318D]">Withdraw</Link> </li> */}
                            </ul>
                            <div onClick={toggleNav} className="md:hidden">
                                {!nav ? <AiOutlineClose size={30} className="cursor-pointer md:hidden absolute right-8 top-12 "/>:
                                <AiOutlineMenu size={30} className="cursor-pointer md:hidden absolute right-8 top-12 "/>
                            }
                            </div>
                           
                       
                        

                        

                       
                    </nav>
                
            </header>
        </>
     );
}
 
export default Navbar;