import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

const WithdrawAuth = () => {
  const [cookies] = useCookies(["user"]);

  return !cookies.user ? <Navigate to={"withdraw"} /> : <Outlet />;
};

export default WithdrawAuth;
