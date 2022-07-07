import React, { useState } from "react";


function Signin(){
    const [data,setData]=useState({
        username: '',
        email: '',
        password: '',
        conformpassword: ''
    })
    const {username,email,password,conformpassword}=data;
    const changeHandler= e =>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler =e =>{
        e.preventDefault();
        if(password===conformpassword){
            console.log(data);
        }
        else{
            console.log("Password are Missmatch");
            alert("Missmatching Password Please Re-Enter Password")
        }
    }
    return(
        <div>
            <center>
                <form onSubmit={submitHandler}>
                    <input type="text" name="username" value={username} placeholder="Enter User Name" onChange={changeHandler}/><br/>
                    <input type="email" name="email" value={email}placeholder="Enter Email Id" onChange={changeHandler}/><br/>
                    <input type="password" name="password" value={password} placeholder="Enter password" onChange={changeHandler}/><br/>
                    <input type="password" name="conformpassword" value={conformpassword} placeholder="Conformation Password" onChange={changeHandler}/><br/>
                    <input type="submit" name="submit"/>
                </form>
            </center>
        </div>
    );
}

export default Signin;
