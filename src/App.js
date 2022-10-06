import React from "react";
import Register from "./Pages/Register";
import { Routes, Route } from "react-router-dom";
import Withdraw from "./Pages/Withdraw";
import Faq from "./Pages/Faq";
import Login from "./Pages/Login";
import Logout from "./Components/Logout";
import WithdrawAuth from "./utils/WithdrawAuth";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={<Faq />} />
      <Route path="/login" element={<Login />} />

      <Route element={<WithdrawAuth />}>
        <Route path="withdraw" element={<Withdraw />} />
      </Route>
    </Routes>
  );
}

export default App;
