import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      task: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const task = this.props.todo.task;
    this.setState({ task });
  }
  handleClick(e) {
    console.log(e.target.className)
    e.target.className.includes('Todo-remove')
      ? this.props.remove(this.props.todo.id)
      : this.setState({ edit: true });
  }

  handleChange(e) {
    const val = e.target.value;
    this.setState((state) => ({ task: val }));
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
    const todoList = (
      <div className="Todo">
        <h1>{this.props.todo.task}</h1>
        <div className="Todo-btns">
          <i onClick={this.handleClick} 
          className="Todo-edit far fa-edit" 
          />
          <i
            onClick={this.handleClick}
            className="Todo-remove far fa-trash-alt"
          />  
        </div>
      </div>
    );
    return this.state.edit ? editTodo : todoList;
  }
}

export default Todo;
