export const getCategories = ({ todo }) => todo.categories;

export const getCategory = ({ todo }) => todo.category;

export const getTodos = ({ todo }) => todo.category ?
  todo.todos.filter(item => item.category === todo.category) :
  todo.todos;
