import React, { useState,useEffect } from 'react';

function Effect() {
    const [count,setCount]=useState(0);
    useEffect(()=>console.log(count),[count])
  return (
    <div>
        <p>you Clicked {count} times</p>
        <button onClick={()=>{setCount(count+1)}}>Click me</button>
    </div>
  );
}
export default Effect;
