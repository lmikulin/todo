import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../redux/actions/todo';

const Todo = ({ todo, toggleTodo }) => (
  <div>
      <span onClick={() => toggleTodo(todo.id)}>{todo.done ? "👌" : "👋"}</span>
      <span>{todo.text}</span>
      <span>{todo.category}</span>
  </div>
);

export default connect(null, { toggleTodo })(Todo);
