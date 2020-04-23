import {
  ADD_TODO,
  TOGGLE_TODO,
  SELECT_CATEGORY
} from '../actions/actionTypes';

export const INITIAL_STATE = {
  categories: ['home', 'work'],
  todos: [],
  category: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, category, text } = action;
      const todos = [...state.todos, {id, category, text, done: false}];
      const categories = [...state.categories];

      if (!state.categories.includes(action.category)) {
        categories.push(action.category);
      }
      
      return {
        categories,
        todos
      };
    }

    case TOGGLE_TODO: {
      const todos = state.todos.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo);
      return {
        categories: [...state.categories],
        todos
      };
    }

    case SELECT_CATEGORY: {
      return {
        ...state,
        category: action.category
      };
    }
    
    default:
      return state;
  }
}
