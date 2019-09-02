import { connect } from 'react-redux';

import ToDoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { removeTodo, fetchTodos, createTodo, updateTodo, deleteTodo } from '../../actions/todo_actions';

const mapStatetoProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors 
});

const mapDispatchtoProps = (dispatch) => ({
  // receiveTodo: (todo) => { dispatch(receiveTodo(todo)) },
  removeTodo: (todo) => { dispatch(removeTodo(todo)) },
  fetchTodos: (todo) => { dispatch(fetchTodos(todo)) },
  createTodo: (todo) => { dispatch(createTodo(todo)) },
  updateTodo: (todo) => { dispatch(updateTodo(todo)) },
  deleteTodo: (todo) => { dispatch(deleteTodo(todo)) }
});

export default connect(
  mapStatetoProps, 
  mapDispatchtoProps
)(ToDoList);