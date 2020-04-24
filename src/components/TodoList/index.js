import React from 'react';
import { connect } from 'react-redux';
import Todo from '../Todo';
import AddTodo from '../AddTodo';
import { getTodos } from '../../redux/selectors';

import './index.scss';

const TodoList = ({ todos }) => (
  <div>
    <label className="title">Todos</label>
    <AddTodo />
    <ul className="todo-list">
      {todos.map(todo => <li key={todo.id}><Todo todo={todo} /></li>)}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  todos: getTodos(state)
});

export default connect(mapStateToProps)(TodoList);