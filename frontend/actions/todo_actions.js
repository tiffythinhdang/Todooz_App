export const RECEIVE_TODO = "RECEIVE TODO";
export const RECEIVE_TODOS = "RECEIVE TODOS";
export const REMOVE_TODO = "REMOVE TODOS";

import * as APIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from '../actions/error_actions'

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
});

export const fetchTodos = () => dispatch => {
  return (
    APIUtil.fetchTodos()
      .then(todos => dispatch( receiveTodos(todos) ) )
  );
};

export const createTodo = (todo) => dispatch => {
  // let a = APIUtil.createTodo(todo)
  // debugger;
  return 'hello';
  return new Promise(function(res, rej) {return res()})
  return APIUtil.createTodo(todo)
    .then(
      todo => dispatch(receiveTodo(todo))//, dispatch(clearErrors()) },
      // err => dispatch(receiveErrors(err.responseJSON))
  )
}

export const updateTodo = (todo) => dispatch => {
  APIUtil.updateTodo(todo)
    .then(
      todo => dispatch(receiveTodo(todo))
  )
}

export const deleteTodo = (todo) => dispatch => {
  APIUtil.deleteTodo(todo)
    .then(
      todo => dispatch(removeTodo(todo))
  )
}