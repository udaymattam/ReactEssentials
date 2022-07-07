import React from "react";
import Navebar from "./Navebar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signin from "./Signin";

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navebar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signin" element={<Signin/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
