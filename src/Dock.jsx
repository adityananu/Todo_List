import React, { useState } from "react";
import "./index.css";

const Dock = ({ todos, deleteHand, setTodos }) => {
  const [textState, setTextState] = useState("");

  const [idState, setIdState] = useState(null);

  // const strike = () =>{
  //     let value={todos};
  //     console.log(value);

  // }
  const saveEle = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.text = textState;
      }
      return todo;
    });
    setTodos(updateTodos);
    setIdState(null);
  };

  return (
    <>
      <div className="division">
        {/*mapping function */}
        {todos.map((todo) => (
          <div className="component" key={todo.id}>
            {todo.id == idState ? (
              <>
                <input
                  className="textTag"
                  onChange={(e) => setTextState(e.target.value)}
                />
                <button className="toBe" onClick={() => saveEle(todo.id)}>
                  save
                </button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <button className="toBe" onClick={() => setIdState(todo.id)}>
                  edit
                </button>
              </>
            )
            }
            <button className="only" onClick={() => deleteHand(todo.id)}>
              delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dock;
