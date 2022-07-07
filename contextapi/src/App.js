import React,{createContext, useState} from "react";
import Display from "./Display";

export const store= createContext();

function App() {

  const [data,setData]=useState([
    {
      username: "alex",
      language: "English"
    },
    {
      username: "adam",
      language: "English"
    }
    
  ]);
  return (
    <div>
    <store.Provider value={[data,setData]}>
       <center>
        <Display/>
      </center> 
      </store.Provider>
    </div>
  );
}

export default App;
