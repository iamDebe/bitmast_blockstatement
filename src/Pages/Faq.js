import React from "react";
import Navbar from "../Components/Navbar";
import { GoTriangleDown } from "react-icons/go";
import BitmastBtn from "../Components/BitmastBtn";
import { Link } from "react-router-dom";

const Faq = () => {
    return (  

        <>
            <Navbar />
            <div className="mt-[15rem] md:flex justify-evenly items-center mx-auto max-w-[1200px] px-4   pb-2 shadow-lg">
                <div className="fag-hero md:w-[40%]  w-[60%] mx-auto p-4">
                    <img src="/assets/images/mobile-pay.svg" alt="" />
                </div>

                <article className="md:w-[45%] w-[80%] mx-auto ">
                    <h1 className="font-extrabold md:text-2xl  text-[1.2rem] md:my-4 mt-6 mb-3 uppercase w-[100%] ">Lorem ipsum dolor sit amet</h1>
                    <p className="w-80 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum sapiente ipsum, modi eius minima corrupti expedita rem aut fugiat vero.</p>
                    <BitmastBtn className="font-bold fs-4 mt-5 w-[70%]"><Link to="/register" className="text-white">GET STARTED</Link></BitmastBtn>
                </article>
                
            </div>

            <section className="mt-[6rem] mb-[5rem]  mx-auto max-w-[1200px] px-4">
                <h2 className="md:text-[2rem] text-[1.5rem] capitalize font-bold  leading-normal  mb-[1rem]">frequently asked questions</h2>
                <div className="relative w-full overflow-hidden ">
                    <input type="checkbox" 
                    name=""
                    id=""
                    className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                     />
                    <div className="bg-white h-12 w-full flex  items-center">
                       <h1 className="text-[#2C318D] font-semibold md:text-[1.3rem] text-[1.rem]">How can I create a wallet</h1>
                    </div>
                    <div className="absolute top-3 right-4 text-gray-300 transition-transform duration-500 rotate-0  peer-checked:rotate-180">
                        <GoTriangleDown  size={30} />
                    </div> 
                   
                    <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                        <div className="px-2 py-2">
                            <p className="md:text-lg text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                    </div>
                </div>
                <div className="relative w-full overflow-hidden">
                    <input type="checkbox" 
                    name=""
                    id=""
                    className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                     />
                    <div className="bg-white h-12 w-full  flex  items-center">
                       <h1 className="text-[#2C318D] font-semibold md:text-[1.3rem] text-[1.rem]">How can I create a wallet</h1>
                    </div>
                    <div className="absolute top-3 right-4 text-gray-300 transition-transform duration-500 rotate-0  peer-checked:rotate-180">
                        <GoTriangleDown  size={30} />
                    </div> 
                   
                    <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                        <div className="px-2 py-2">
                            <p className="md:text-lg text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full overflow-hidden">
                    <input type="checkbox" 
                    name=""
                    id=""
                    className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                     />
                    <div className="bg-white h-12 w-full  flex  items-center">
                       <h1 className="text-[#2C318D] font-semibold md:text-[1.3rem] text-[1.rem]">How can I create a wallet</h1>
                    </div>
                    <div className="absolute top-3 right-4 text-gray-300 transition-transform duration-500 rotate-0  peer-checked:rotate-180">
                        <GoTriangleDown  size={30} />
                    </div> 
                    <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                        <div className="px-2 py-2">
                            <p className="md:text-lg text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Faq;