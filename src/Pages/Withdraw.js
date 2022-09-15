import React, { useState } from "react";
import BitmastBtn from "../Components/BitmastBtn";
import CustomAlert from "../Components/CustomAlert";
import Navbar from "../Components/Navbar";

const Withdraw = () => {
  const [wallet, setWallet] = useState({
    symbol: "BTC",
    exchangeRate: 0.77,
  });

  const [tokenData, setTokenData] = useState({
    BTC: {
      exchangeRate: 0.77,
    },
    BNB: {
      exchangeRate: 0.56,
    },
    USDT: {
      exchangeRate: 0.89,
    },
  });

  const switchWallet = () => {
    const selectedToken = document.querySelector("#selectWallet").value;
    const tokenRate = tokenData[selectedToken].exchangeRate;
    console.log(tokenRate);
    setWallet({
      symbol: selectedToken,
      exchangeRate: tokenRate,
    });
  };

  return (
    <>
      <div className="">
        <Navbar />
        {/* <CustomAlert  data={alertData} /> */}
        <div className="md:flex justify-evenly items-center mx-auto max-w-[1200px] px-4 mt-[10rem]">
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
                  withdraw
                </h3>
                <div className="my-4">
                  <label
                    htmlFor="bankAccount"
                    className="text-[#B1B1B1] flex justify-between md:text-lg text-sm items-center h-10"
                  >
                    <h2 className="uppercase text-[#B1B1B1] font-bold  ">
                      choose assigned wallet
                    </h2>
                  </label>
                  <select
                    name="walletName"
                    id="selectWallet"
                    className="border-2 border-[hsla(0, 0%, 69%, 1)] w-full md:p-4 "
                    onChange={switchWallet}
                  >
                    <optgroup className="border-2 border-[#2C318D]">
                      <option defalutvalue="" className="" selected disabled>
                        Choose Your Wallet
                      </option>
                      <option defalutvalue="BTC" className="">
                        BTC
                      </option>
                      <option defalutvalue="USDT" className="">
                        USDT
                      </option>
                      <option defalutvalue="BNB" className="">
                        BNB
                      </option>
                    </optgroup>
                  </select>
                </div>

                <img
                  src="/assets/images/image 2.svg"
                  className="mx-auto shadow-md"
                  alt=""
                />
                <div className="flex justify-evenly ">
                  <p className="text-center my-3 ms-5 text-[#2C318D]">gchdh67b99t675544009ghbkkj</p>
                  <img
                    src="/assets/images/history 1.svg"
                    className="cursor-pointer"
                    alt=""
                    title="copy"
                  />
                </div>
                <div className="my-4">
                  <label
                    htmlFor="phone"
                    className="text-[#B1B1B1] md:text-lg text-sm font-bold uppercase py-2 "
                  >
                    naira equivalent
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder=""
                    id=""
                    className="border-2 border-[hsla(0, 0%, 69%, 1)] w-full md:p-4 placeholder:text-[#2C318D] placeholder:font-extrabold"
                  />
                  <div className="md:flex justify-between items-center h-15 balance mt-6">
                    <h3 className="capitalize text-[#2C318D] md:text-lg text-[.8rem] font-bold">
                      available balance
                    </h3>
                    <h3 className="text-[#2C318D] font-bold md:text-lg text-[.8rem]">
                      {" "}
                      0.4365581224532{" "}
                      <span className="changing__value">
                        {wallet.symbol}
                      </span>{" "}
                    </h3>
                    <img
                      src="/assets/images/Group 3.svg"
                      className="cursor-pointer w-7 md:ml-0 ml-auto mt-[.3nrem]"
                      alt="add-icon"
                    />
                  </div>
                </div>

                <div className="mt-6 mb-4">
                  <label
                    htmlFor="bankAccount"
                    className="text-[#B1B1B1] md:text-lg text-sm font-bold flex justify-between"
                  >
                    <h2 className="uppercase">
                      <span className="changing__value">{wallet.symbol}</span>{" "}
                      EQUIVALENT
                    </h2>
                    <img src="/assets/images/image 3.svg" alt="" />
                  </label>
                  <input
                    type="text"
                    name="bankAccount"
                    id=""
                    className="border-2 border-[hsla(0, 0%, 69%, 1)] w-full md:p-4"
                  />
                </div>
                <div className="md:flex justify-between items-start h-7">
                  <h3 className="capitalize text-[#2C318D] md:text-lg text-[.8rem] font-bold">
                    exchange rate
                  </h3>
                  <h3 className="text-[#2C318D] font-bold md:text-lg text-[.8rem]  ">
                    {wallet.exchangeRate} NGN /
                    <span className="changing__value">
                      {" "}
                      0.55 {wallet.symbol}
                    </span>
                  </h3>
                </div>
                <p className="md:text-[1.1rem] text-[.85rem] text-[#4C5F68] font-semibold w-full md:mt-0 mt-1">
                  Conversion of cryptocurrency to Naira using CryptoCompare
                </p>
                <hr className="my-3" />
                <div className=" my-3">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id=""
                    className="px-2 "
                  />
                  <span className="text-[#2C318D]   md:text-[1.1rem] text-[.8rem] uppercase pl-3">
                    auto convert currencies
                  </span>
                </div>
                <p className="mt-2">
                  The auto convert tool allows users to change their
                  cryptocurrencies to fiat currency in real time. Enable this
                  function if you wish to automatically receive money after
                  every bitcoin deposit.
                </p>
                <hr className="my-3" />
                <p className="text-[#892727] md:text-[1.2rem] text-[.85rem]font-semibold my-2 w-full">
                  User’s wallet has daily withdrawal limits. Users may withdraw
                  up to 5 transfers within a day with total value less than
                  N100, 000. For higher volume transfer, contact support
                </p>
                <BitmastBtn className="w-[70%]">Withdraw</BitmastBtn>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdraw;
