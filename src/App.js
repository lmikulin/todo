import React from 'react';
import TodoList from './components/TodoList';
import CategoryPicker from './components/CategoryPicker';
import './App.scss';

function App() {
  return <div>
    <TodoList />
    <CategoryPicker />
  </div>;
}

export default App;
