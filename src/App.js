import { BrowserRouter ,Route, Routes } from "react-router-dom";
import HomeDefault from "./pages/HomeDefault/HomeDefault";
import React from 'react';
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import CekLogin from "./pages/CekLogin/CekLogin";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeDefault/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/CekLogin" element={<CekLogin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
