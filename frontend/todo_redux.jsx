import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//Testing code
import { receiveTodo, receiveTodos, removeTodo } from './actions/todo_actions';
import { allTodos } from './reducers/selectors';
import { fetchTodos } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  const store = configureStore();

  ReactDOM.render(<Root store={store} />, root);

  //Testing code
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;
});