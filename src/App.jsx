import React, { useState } from 'react'
import Dock from './Dock';
import paint from './paint.png'
const App = () => {
//  state variable to read text.
 const[text,setText]= useState("");
//  state variable to hold text in an array formate. 
 const[todos,setTodos] = useState([]);

 const inputHandler = e =>{
  setText(e.target.value);
 }

//  function to add input text into an array by state varible.
const insertText = e =>{
  e.preventDefault();
  let newTodo = {
    id: new Date().getTime(),
    text:text
  }
  if(text.trim() === ""){
    alert("Enter todo");
    return;
   }
  const data = [...todos].concat(newTodo);
  setTodos(data);
  setText("");
}

// function to delete specified index from list 
const deleteHand = (id) => {
  const newTodos = todos.filter((todo) => todo.id !== id);
  setTodos(newTodos);
}
  return (
    <div className="card">
      <div className="card_sub">
        <div className="division_1">
          <form onSubmit={insertText}>
            <h1><span> <img src={paint} alt="My Image" /></span>To-Do list</h1>
            {/* To enter Todo */}
            <input
              size="60"
              type="text"
              name="todo"
              className="textTag"
              value={text}
              onChange={inputHandler}
            />
            &nbsp;
            {/* To submit Todo */}
            <input type="submit" className="toBe" value="Add" name="add" />
          </form>
        </div>
        <Dock todos={todos} deleteHand={deleteHand} setTodos={setTodos}/>
      </div>
    </div>
  );
} 

export default App