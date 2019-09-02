import React from 'react';
import ErrorList from '../errors/error_list';
// import { uniqueId } from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      body: '',
      done: false
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property) {
    // console.log(this.state);
    return (e) => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    console.log('here')
    e.preventDefault();
    e.stopPropagation();
    const todo = {
      title: "this.state.title",
      body: "this.state.body",
      done: false
    }
    this.props.createTodo({ todo }).then(
      () => 
        this.setState({
          title: '',
          body: '',
          done: false
        })
    );
  }

  render() {
    // debugger
    return (
      <div className='todo-form'>
        <h3>Add a New Task</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Task
            <input type="text" onChange={this.handleChange('title')}/>
          </label>

          <label>
            Details
            <textarea onChange={this.handleChange('body')}></textarea>
          </label>

          <input type="submit" value="Add Task"/>
        </form>
        
        {/* <ErrorList errors={this.props.errors}/> */}
      </div>
    );
  }
}

export default TodoForm;