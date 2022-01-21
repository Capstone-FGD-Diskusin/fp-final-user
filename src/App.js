import { BrowserRouter ,Route, Routes, PrivateRoute } from "react-router-dom";
import HomeDefault from "./pages/HomeDefault/HomeDefault";
import React from 'react';
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import CekLogin from "./pages/CekLogin/CekLogin";
import HomeLogin from "./pages/HomeLogin/HomeLogin";
import Comment from "./pages/Comment/Comment";
import Mengikuti from "./pages/Mengikuti/Mengikuti";
import Profile from "./pages/Profile/Profile";
import Pengikut from "./pages/Pengikut/Pengikut";
import Peringkat from "./pages/Peringkat/Peringkat";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from "./store/store";
import Kategori from "./pages/Kategori/Kategori";
import ThreadMengikuti from "./pages/ThreadMengikuti/ThreadMengikuti";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<HomeDefault/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/CekLogin" element={<CekLogin/>}/>
          {/* <PrivateRoute/> */}
          <Route path="/Login/HomeLogin/Profile/:id/" element={<Profile/>}/>
          <Route path="/Login/HomeLogin" element={<HomeLogin/>}/>
          <Route path="/Login/HomeLogin/Mengikuti" element={<ThreadMengikuti/>}/>
          {/* <Route path="/Login/HomeLogin:id" element={<HomeLogin/>}/> */}
          <Route path="/Login/HomeLogin/Peringkat" element={<Peringkat/>}/>
          <Route path="/Login/HomeLogin/Profile/Mengikuti" element={<Mengikuti/>}/>
          <Route path="/Login/HomeLogin/Profile/Pengikut" element={<Pengikut/>}/>
          {/* <Route path="/Login/HomeLogin/Trend" element={<HomeLogin/>}/> */}
          <Route path="/Login/HomeLogin/:id/Comment" element={<Comment/>}/>
          <Route path="/Login/HomeLogin/:id/" element={<Kategori/>}/>
        </Routes>


        </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
