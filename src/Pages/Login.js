import React, { useState, useEffect, useRef } from "react";
import BitmastBtn from "../Components/BitmastBtn";
import Navbar from "../Components/Navbar";
import { useCookies } from "react-cookie";
import axios from "axios";
import { path } from "../api/urlRoutes";
import CustomAlert from "../Components/CustomAlert";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const base_url = "https://bitmast-dummy-response.herokuapp.com";
  const url = "https://academy-api.stormcelltech.com/api";
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["user"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [passwordType, setPasswordType] = useState("password")
  const [eyeIcon, setEyeIcon] = useState("fa-eye-slash")
  
  const [alertData, setAlertData] = useState({
    title: "",
    message: "",
    color: ""
  })

  async function getUserWithEmail() {
    const resp = await axios.get(base_url + path("get-users"), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_APP_TOKEN}`,
      },
    });

    return resp;
  }

  async function fetchUserData() {
    const response = await axios
      .post(
        url + path("login"),

        {
          email: email,
          password: password,
        },
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${process.env.REACT_APP_APP_TOKEN}`,
          },
        }
      )
        return response;

      
  }
 

  

  useEffect(() => {}, []);

  // console.log([email, password])

  const authenticateUser = (userData) => {
    setCookies("user", userData, {
      path: "/", // available across this application
      maxAge: 86400, //1 day
    });
  };

  const passwordInput = useRef("userPassword");
  const userName = useRef("usernameInput");
  const nextItem = () => {
    const userData = getUserWithEmail();
    userData
      .then((resp) => {
        const feedback = resp.data;
        // console.log(feedback)
        const user = feedback.filter(function (data) {
          return data.email == email;
        });
        
        if (user.length > 0) {
          passwordInput.current.style.display = "block";
          userName.current.style.display = "none";
          setAlertData({
            title: "",
            message: "",
            color: ""
          })
        
        } else {
          setAlertData({
            title: "Oops! ",
            message: "Invalid email",
            color: "red"
          })
        }

        authenticateUser(user[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = () => {
    const userLogin = fetchUserData();

    userLogin.then((response) => {
        const data = response.data;
        console.log(data)
        if(data.status == "success"){
          setAlertData({
            title: data.status,
            message: data.message,
            color: "green"
        })
       
        }else{
            setAlertData({
                title: "Oops! ",
                message: "Password mismatch",
                color: "red"
            })
        }
    })
    .catch((error) => {
      console.log(error);
    })

    navigate('/withdraw')
    
    
   
  };
  const prevItem = () => {
    passwordInput.current.style.display = "none";
    userName.current.style.display = "block";
  };

 
    
    const togglePasswordVisibilty =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       setEyeIcon('fa-eye')
       return;
      }
      setPasswordType("password")
      setEyeIcon('fa-eye-slash')
    }


  return (
    <>
      <div className="">
        <Navbar />
        <CustomAlert data={alertData}/>
        <div className="md:flex justify-evenly items-center mx-auto max-w-[1200px] px-4 mt-[12rem]">
          <div className="reg__img max-w-[500px] md:w-[40%] self-center hidden md:block ">
            <img
              src="/assets/images/withdraw-hero.svg"
              alt=""
              className="object-cover"
            />
          </div>
          <div className="bg-[#F7F7FF] md:w-[50%] w-[100%] md:my-4 mt-10 mb-5 shadow-lg mx-auto">
            <div className="p-10">
              <form action="" className="max-w-[500px] mx-auto">
                <h3 className="text-[#2C318D] text-lg font-bold mb-3 capitalize">
                  convert crypto to cash
                </h3>
                <h3 className="uppercase text-black font-bold mb-2 text-[clamp(1rem,2vw,1.5rem)]">
                  Login to transfer
                </h3>
                <div className="my-4" ref={userName} id="userName">
                  <label
                    htmlFor="phone"
                    className="text-[#B1B1B1] md:text-lg text-sm font-bold uppercase py-2 "
                  >
                    EMAIL
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder=""
                    className="border-2 border-[hsla(0, 0%, 69%, 1)] w-full md:p-4 placeholder:text-[#2C318D] placeholder:font-extrabold"
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="button"
                    className="bg-[#2C318D] text-[1.3rem] text-white  py-3 px-4 my-3 ms-0 capitalize next"
                    onClick={nextItem}
                  >
                    Next <i className="fa fa-chevron-right ms-2"></i>
                  </button>
                </div>

                <div className="" id="qrCode" ref={passwordInput}>
                  <div>
                    <h2 className="mx-auto text-center my-4 uppercase text-[#B1B1B1] md:text-lg text-sm font-bold">
                      {" "}
                      <strong>scan QR</strong> code to login
                    </h2>
                    <img
                      src="/assets/images/image 2.svg"
                      className="mx-auto shadow-md"
                      alt=""
                    />
                  </div>
                  <div className="mt-6 mb-4">
                    <h2 className="mx-auto text-center text-[#B1B1B1] md:text-lg text-sm font-bold my-4">
                      OR
                    </h2>
                    <label
                      htmlFor="bankAccount"
                      className="text-[#B1B1B1] md:text-lg text-sm font-bold flex justify-between"
                    >
                      <h2 className="uppercase">password</h2>
                    </label>
                    <input
                    type={passwordType}
                      name="bankAccount"
                      className="border-2 border-[hsla(0, 0%, 69%, 1)] w-80 md:p-4"
                      defaultValue={password}
                      onChange={(e) => setPassword(e.target.value)}
                      
                    />
                    <span className="ms-2">
                      <i className={ `fa ${eyeIcon}`} onClick={togglePasswordVisibilty}></i>
                    </span>
                    
                  </div>
                  <BitmastBtn handleLogin={handleLogin} className="w-[70%]">Login</BitmastBtn>
                  <BitmastBtn
                    type="button"
                    className=" py-3 px-4 my-3 ms-3 capitalize"
                    onClick={prevItem}
                  >
                    {" "}
                    <i className="fa fa-chevron-left me-2"></i>back{" "}
                  </BitmastBtn>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
