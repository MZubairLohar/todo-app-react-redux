import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

export default function App() {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div className="App m-lg-5 my-5">
      <div className="container">
        <Header />
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}
