import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../redux/actions/todo';

const AddTodo = ({ addTodo: addTodoAction }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    addTodoAction(uuidv4(), form.todotext.value, form.category.value);
    form.todotext.value = '';
    form.category.value = '';
  }

  return <form onSubmit={handleSubmit}>
    <input name="todotext" />
    <input name="category" />
    <button type="submit">Add Todo</button>
  </form>;
};

export default connect(null, { addTodo })(AddTodo);
