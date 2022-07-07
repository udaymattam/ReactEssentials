import React, { useContext, useState } from "react";
import {store} from './App';

const Display=()=>{
    const [data,setData]=useContext(store);
    const [name,setName]=useState('');
    const submitHandler=e=>{
        e.preventDefault();
        setData([...data,{username:name}])
    }
    return(
        <div className="card">
            <div className="card-body">
                {data.map(item=>(
                    <>
                    <h3 className="card-title">UserName:{item.username}</h3>
                    <h3 className="card-title">UserLanguage:{item.language}</h3>
                    </>
                ))}
                <form onSubmit={submitHandler}>
                    <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter User name"/>
                    <input type="submit" value="add User"/>
                </form>
            </div>
        </div>
    )

}

export default Display;