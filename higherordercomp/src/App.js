import React from "react";
import Hoc from "./Hoc";
import './App.css'


const App =(props)=>{
  return(
    <h1>Welcome User !!{props.name}</h1>
  )
}

export default Hoc(App);