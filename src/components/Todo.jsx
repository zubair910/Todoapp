import React, { useState } from "react";
// import { FaBeer } from "react-icons/fa";
// import { BiEdit } from "react-icons/bi";
// import { AiFillDelete } from "react-icons/ai";
import image from "../images/img1.png";
import "./Todo.css";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [indexValue, setIndexValue] = useState("");
  const [editInputValue, setEditInputValue] = useState("");
  // console.log("inputValue", inputValue);

  const addtodo = () => {
    console.log(inputValue);
    todo.push(inputValue);
    setTodo([...todo]);
    setInputValue("");
  };

  const deleteAll = () => {
    setTodo([]);
  };

  const deleteTodo = (ind) => {
    console.log("hello", ind);
    todo.splice(ind, 1);
    setTodo([...todo]);
  };

  const editTodo = (ind) => {
  
    
    console.log("edit",editInputValue);
    setIndexValue(ind);
    setEditInputValue(todo[ind])
  };

  const updateValue = () => {
    console.log(editInputValue);
    todo.splice(indexValue, 1, editInputValue);
    setTodo([...todo]);
    setIndexValue("");
    setEditInputValue("");
  };
  console.log("todo", todo);
  return (
    <div className="Mainbox">
      <img src={image} width="200" />
      <h1 className="text-center mt-5">
        TODO LIST
        {/* <BiEdit /> */}
      </h1>
      <div className="w-50 mx-auto btons">
        <input
          type="text"
          value={inputValue}
          placeholder="ENTER TODO..."
          className="my-5 form-control input-group"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-info mx-2 " onClick={addtodo}>
          ADD TODO
        </button>
        <button className="btn btn-danger" onClick={deleteAll}>
          DELETE TODO
        </button>
      </div>

      {/* ////ui /// */}
      <div className="boxMain1">
          {todo.map((value, index, array) => {
            return index === indexValue ? (
              <>
              <div key={index} className="edit  btonos">
                  <input className="editno" onChange={(e) => setEditInputValue(e.target.value)} value={editInputValue}/>
                  <div className="Editnobuttons">
                    <button onClick={updateValue}>Update</button>
                  </div>
                </div></>
            ) : (
              <>
                <div key={index} className="listline btonos">
                  <div className="listno">
                      {value}
                  </div>
                  <div className="mybuttons ">
                    <button  onClick={() => editTodo(index)}>Edit</button>
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                  </div>
                </div>
                </>
            );
        })}
        </div>
    </div>
  );
};

export default Todo;