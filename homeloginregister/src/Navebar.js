import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link} from "react-router-dom";



function Navebar(){
    return(
        <div>
            <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/Login"><li>Login</li></Link>
            <Link to="/Signin"><li>Signin</li></Link>
            </ul>
      </div>
        
    )
}

export default Navebar;