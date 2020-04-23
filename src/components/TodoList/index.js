import React from 'react';
import { connect } from 'react-redux';
import Todo from '../Todo';
import AddTodo from '../AddTodo';
import { getTodos } from '../../redux/selectors';

const TodoList = ({ todos }) => (
  <div>
    <h2>Todos</h2>
    <ul>
      {todos.map(todo => <li key={todo.id}><Todo todo={todo} /></li>)}
    </ul>
    <AddTodo />
  </div>
);

const mapStateToProps = state => ({
  todos: getTodos(state)
});

export default connect(mapStateToProps)(TodoList);