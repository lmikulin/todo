import React from 'react';
import TodoList from './components/TodoList';
import CategoryPicker from './components/CategoryPicker';
import './App.scss';

function App() {
  return <div className="app">
    <div className="column">
      <TodoList />
    </div>
    <div className="column">
      <CategoryPicker />
    </div>
  </div>;
}

export default App;
