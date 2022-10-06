import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { path } from "../api/urlRoutes";
import CustomAlert from "../Components/CustomAlert";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import BitmastBtn from "../Components/BitmastBtn";
import classNames from "classnames";

const Register = () => {
  const base_url = "https://bitmast-dummy-response.herokuapp.com";

  const navigate = useNavigate();
  const [alertData, setAlertData] = useState({
    title: "",
    message: "",
    color: "",
  });
  const [cookies, setCookies] = useCookies(["user"]);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    bankAcct: "",
    bankName: "",
    bvn: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  // const [enableBtn, setEnabledBtn] = useState(true);

  const handleCheckBox = (event) => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    setAlertData({
      title: "",
      message: "",
      color: ""

    })
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const resp = await axios
      .post(
        base_url + path("register"),
        {
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          bankAcct: formData.bankAcct,
          bvn: formData.bvn,
        },
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${process.env.REACT_APP_APP_TOKEN}`,
          },
        }
      )

      .then((resp) => {
        const data = resp.data;
        if (data.status === "success") {
          // navigate('/login')
          setAlertData({
            title: data.title,
            message: data.message,
            color: "green",
          });
        } else if (data.status === false) {
          setAlertData({
            title: data.title,
            message: data.message,
            color: "red",
          });

          console.log("function ran !!");
          const phone = (document.querySelector("#phoneNumber").value = "");
          const email = (document.querySelector("#email").value = "");
          const bankAcct = (document.querySelector("#bankAcct").value = "");
          const bankName = (document.querySelector("#bankName").value = "");
          const bvn = (document.querySelector("#bvn").value = "");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <CustomAlert data={alertData} className="my-4" />
      <div className="md:flex justify-evenly items-center mx-auto max-w-[1200px] px-4 my-[15rem] ">
        <div className="reg__img max-w-[500px] md:w-[40%] self-center hidden md:block ">
          <img
            src="/assets/images/withdraw-hero.svg"
            alt=""
            className="object-cover"
          />
        </div>

        <div className="bg-[#F7F7FF] md:w-[50%] w-[100%] md:my-4 mt-10 mb-5 shadow-lg mx-auto">
          <div className="p-10">
            <form
              action=""
              className="max-w-[500px] mx-auto"
              onSubmit={submitForm}
            >
              <h2 className="text-[#2C318D] text-lg font-bold mb-3 capitalize">
                convert crypto to cash
              </h2>
              <h3 className="uppercase text-black font-bold mb-2 text-[clamp(1rem,2vw,1.5rem)]">
                Register to transfer cash
              </h3>
              <div className="my-4">
                <label
                  htmlFor="phone"
                  className="text-[#B1B1B1] font-bold md:text-lg"
                >
                  PHONE NUMBER
                </label>
                <br />
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="border-2 border-[hsla(0, 0%, 69%, 1)] w-full md:p-4"
                  required
                  defaultValue={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="phoneNumber"
                  className="text-[#B1B1B1] font-bold md:text-lg"
                >
                  EMAIL
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border-2 border-[hsla(0, 0%, 69%, 1)] w-full md:p-4"
                  required
                  defaultValue={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="bankAccount"
                  className="text-[#B1B1B1] font-bold md:text-lg"
                >
                  BANK ACCOUNT NUMBER (NUBAN)
                </label>
                <br />
                <input
                  type="text"
                  name="bankAcct"
                  id="bankAcct"
                  // ref={acctNumber}
                  className="border-2 border-[hsla(0, 0%, 69%, 1)] w-full md:p-4"
                  required
                  defaultValue={formData.bankAcct}
                  onChange={handleChange}
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="bankName"
                  className="text-[#B1B1B1] font-bold md:text-lg"
                >
                  BANK NAME
                </label>
                <br />
                <select
                  type="text"
                  name="bankName"
                  id="bankName"
                  className="border-2 border-[hsla(0, 0%, 69%, 1)] w-full md:p-4 bg-[#e5f0fe] text-grey-500"
                  required
                  defaultValue={formData.bankName}
                  onChange={handleChange}
                >
                 
                    <option value={0} selected disabled>
                      Select Bank
                    </option>
                    <option value={1}>Access/Diamond</option>
                    <option value={2}>Guaranty Trust Bank</option>
                    <option value={3}>United Bank of Africa</option>
                 
                </select>
              </div>
              <div className="my-4">
                <label
                  htmlFor="phone"
                  className="text-[#B1B1B1] font-bold md:text-lg"
                >
                  BVN
                </label>
                <br />
                <input
                  type="text"
                  name="bvn"
                  id="bvn"
                  className="border-2 border-[hsla(0, 0%, 69%, 1)] w-full md:p-4"
                  required
                  defaultValue={formData.bvn}
                  onChange={handleChange}
                />
              </div>
              <div className="my-6  justify-between ">
                <input
                  type="checkbox"
                  id="check"
                  className="ms-1 hidden peer cursor-pointer"
                  checked={isChecked.isChecked}
                  name="isChecked"
                  required
                  onChange={handleCheckBox}
                />

                <label
                  className="my-2 flex h-8 w-16 bg-gray-600 text-white rounded-full peer-checked:bg-blue-500 cursor-pointer"
                  htmlFor="check"
                >
                  <span
                    className={classNames(
                      "h-8 w-[60%] bg-white text-white rounded-full transiton-all duration-500 cursor-pointer",
                      { "ms-4": isChecked }
                    )}
                  ></span>
                </label>
                <span className="my-2">
                  I agree that my details are correct. Once an Account is mapped
                  to this service, the assigned wallet address cannot be
                  modified or set to another account. All funds received in your
                  wallet will be payable only to the registered account.
                </span>
              </div>
              <BitmastBtn className="w-[70%]" disabled={true}>
                REGISTER
              </BitmastBtn>
              <br />

              <hr />
              <p className="text-[#2C318D] font-semibold py-2">
                Already have an account?
              </p>
              <hr />

              <BitmastBtn className=" w-[50%] px-4">
                <Link to="/login" className="text-white ">
                  LOGIN
                </Link>
              </BitmastBtn>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
