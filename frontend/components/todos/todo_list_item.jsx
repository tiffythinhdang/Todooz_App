import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: this.props.todo.done };

    this.handledelete = this.handledelete.bind(this);
    this.toggledone = this.toggledone.bind(this);
  }

  handledelete(e) {
    e.preventDefault();
    this.props.deleteTodo(this.props.todo);
    this.setState();
  }

  toggledone(e) {
    e.preventDefault();
    const todo = (Object.assign({}, this.props.todo, { done: !this.state.done }));
    this.props.updateTodo(todo);
    this.setState({ done: !this.state.done});
  }

  render() {
    return (
      <div>
        <h3>{this.props.todo.title}</h3>
        <div>{this.props.todo.body}</div>
        <input 
          onClick={this.toggledone} 
          type="submit" 
          value={this.state.done ? "Undone" : "Done"}
        />
        <input 
          onClick={this.handledelete} 
          type="submit" 
          value="Delete"
        />
      </div>
    );  
  }
}

export default TodoListItem;