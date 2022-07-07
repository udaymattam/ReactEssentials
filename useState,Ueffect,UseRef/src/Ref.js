import React,{useRef,useEffect}from 'react'

function Ref() {
  const data=useRef(null);
  const submitHandler=e=>{
    e.preventDefault();
    console.log(data.current.value);
  }
  useEffect(()=>{
    data.current.focus();
  },[])
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input ref={data} type="text" placeholder="Enter your name"/><br/>
          <input type="submit"/>
        </form>
      </center>
    </div>
  )
}

export default Ref;
