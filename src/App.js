import React from "react";
import Register from "./Pages/Register";
import {Routes, Route} from "react-router-dom"
import Withdraw from "./Pages/Withdraw";
import Faq from "./Pages/Faq";
import Login from './Pages/Login';
import Logout from "./Components/Logout";

function App() {
  return (
    <>
      <Routes>

        <Route path="/register" element={<Register />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/faq" element={<Faq />} />
        
      </Routes>
    </>
    
  );
}

export default App;
