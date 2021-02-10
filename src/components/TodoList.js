import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useSelector((state) => state.todoReducer);
  const filter = useSelector((state) => state.visibilityFilterReducer);

  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_ACTIVE':
        return todos.filter((todo) => !todo.completed);
      case 'SHOW_COMPLETED':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };
  const visibleTodos = getVisibleTodos(todos, filter);

  return (
    <div className="my-4 mx-auto">
      {visibleTodos?.length === 0 ? (
        <h3 className="text-center text-white">There are no Todo Items here</h3>
      ) : (
        visibleTodos?.map((todo, i) => (
          <TodoItem key={i} todo={todo} i={+(i + 1)} />
        ))
      )}
    </div>
  );
}
