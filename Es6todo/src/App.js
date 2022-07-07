import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import { useState } from 'react';
import TodoList from './TodoList';

const App=()=>{
  const [task,setTask]=useState("");
  const [todos,setTodos]=useState([]);
  // const [state,setState]=useState(true);
  // state={
  //   disabled:true
  // }


  const changeHandler= e =>{
    setTask(e.target.value)
  }
  const submitHandler= e =>{
    e.preventDefault();
    console.log(task);
    const newTodos=[...todos,task];
    setTodos(newTodos);
    setTask("");
    // if(e.target.task.length<=5){
    //   this.setState({
    //     disabled:false
    //   });
    // }
    // else{
    //   this.setState({
    //     disabled:true
    //   });
      
    // }
  }
  const deleteHandler=(indexValue)=>{
    const newTodos=todos.filter((todo,index)=>index !== indexValue);
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>todo management application</h5>
            <form onSubmit={submitHandler}>
              <input type="text" name="task" value={task} onChange={changeHandler}/>&nbsp;&nbsp;
              {/* <input type="submit" value="add" hidden={task.length>5} name="add"/> */}
              <button type='submit' value="add" hidden={task.length>5}>add</button>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>

          </div>

        </div>

      </center>
    </div>
  );
}

export default App;
