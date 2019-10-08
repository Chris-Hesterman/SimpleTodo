import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      task: this.props.todo.task,
      done: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    if (e.target.className.includes('Todo-edit')) {
      this.setState({ edit: true });
    } else if (e.target.className.includes('Todo-complete')) {
      this.setState(prevState => ({ done: !prevState.done }));
    } else {
      this.props.remove(this.props.todo.id);
    }
  }

  handleChange(e) {
    const val = e.target.value;
    this.setState({ task: val });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ edit: false });
    this.props.remove(this.props.todo.id);
    this.props.edit({ task: this.state.task, id: this.props.todo.id });
  }

  render() {
    const editTodo = (
      <form onSubmit={this.handleSubmit} className="Todo-editForm">
        <label htmlFor="edit">Edit todo: </label>
        <input
          type="text"
          name="edit"
          id="edit"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
    const todoListItem = (
      <div className="Todo">
        {this.state.done ? <h1 className="Todo-done">{this.props.todo.task}</h1>:<h1>{this.props.todo.task}</h1>}
        <div onClick = {this.handleClick} className="Todo-btns">
          <i className="Todo-edit far fa-edit"/>
          <i className="Todo-remove far fa-trash-alt"/>  
          <i className="Todo-complete far fa-check-circle"/>  
        </div>
      </div>
    );
    return this.state.edit ? editTodo : todoListItem;
  }
}

export default Todo;
