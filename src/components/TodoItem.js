import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo, toggleTodo } from '../store/todoReducer';

export default function TodoItem({ todo, i }) {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        text,
      })
    );

    if (editable) {
      setText(todo.text);
    }
    setEditable(!editable);
  };

  return (
    <>
      <div
        className={`
          row text-center
          justify-content-center 
          align-items-center m-2 
          alert ${todo.completed ? 'alert-secondary' : 'alert-primary'}
        `}
      >


        <input
          className="mr-2"
          type="checkbox"
          value={todo.id}
          onChange={(e) => dispatch(toggleTodo(+e.target.value))}
          defaultChecked={todo.completed}
        />
        #{i}
        {/* <div className="col-12 col-md">
          
        </div> */}


        <div className="col-12 col-md">
          {todo.completed ? (
            <h4>
              <del>{todo.text}</del>
            </h4>
          ) : (
            <h4>
              {editable ? (
                <input
                  type="text"
                  placeholder={text}
                  value={text}
                  className="col form-control"
                  onChange={(e) => setText(e.target.value)}
                />


                ) : (
                todo.text
              )}
            </h4>
          )}
        </div>


        <button
          className="btn btn-primary m-2"
          onClick={() => handleUpdate()}
          disabled={todo.completed}
        >
          {editable ? 'Update' : 'Edit'}
        </button>



        <button
          className="btn btn-danger m-2"
          onClick={() => {
            console.log(todo.id);
            return dispatch(deleteTodo(todo.id));
          }}
        >
          Delete
        </button>


      </div>
    </>
  );
}
