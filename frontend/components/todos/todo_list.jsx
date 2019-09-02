import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_list_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <div className="todos-list">
          {
            this.props.todos.map(todo => { 
              return (
                <TodoListItem 
                  key={todo.id} 
                  todo={todo} 
                  removeTodo={this.props.removeTodo}
                  updateTodo={this.props.updateTodo}
                  deleteTodo={this.props.deleteTodo}
                />
              )
            })
          }
        </div>

        <TodoForm 
          createTodo={this.props.createTodo}
          errors={this.props.errors}
        />
      </div>
    );
  }
};

export default TodoList;