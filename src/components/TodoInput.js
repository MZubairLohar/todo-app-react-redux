import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clearTodos } from '../store/todoReducer';
import Links from './Links';

export default function TodoInput() {
  const todos = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAddSubmit = () => {
    if (text.trim() === '') {
      alert('Add valid text');
    } else {
      const newTodo = {
        id: Math.floor(Math.random() * 100000000),
        text: text,
      };

      dispatch(addTodo(newTodo));

      setText('');
    }
  };

  const handleClearSubmit = () => {
    if (todos) {
      dispatch(clearTodos());

      setText('');
    }
  };

  return (
    <>
      <div className="row justify-content-evenly align-items-center text-center m-2">
        <div className="col-12 col-md">
          <Links />
        </div>
        <input
          className="col-12 col-md form-control w-100 my-4 my-md-0"
          type="text"
          placeholder="Enter todo item here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="col-12 col-md">
          <button
            className="btn btn-primary mx-2"
            onClick={() => handleAddSubmit()}
          >
            Add
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={() => handleClearSubmit()}
          >
            Clear All
          </button>
        </div>
      </div>
    </>
  );
}
