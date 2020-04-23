import {
  ADD_TODO,
  TOGGLE_TODO,
  SELECT_CATEGORY
} from './actionTypes';

export const addTodo = (id, text, category) => ({
  type: ADD_TODO,
  id,
  text,
  category
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const setCategory = category => ({
  type: SELECT_CATEGORY,
  category
});
