import React, { Component } from 'react';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.task) {
      this.props.addTodo(this.state.task);
      this.setState({ task: '' });
    }
  }

  handleClear(e) {
    this.props.clearTodos();
  }

  render() {
    return (
      <div className="NewTodoForm-container">
        <form className="NewTodoForm" onSubmit={this.handleSubmit}>
          <label htmlFor="task">Add New: </label>
          <input
            id="task"
            type="text"
            name="task"
            placeholder="Enter task"
            value={this.state.task}
            onChange={this.handleChange}
            autoFocus
          />
          <button className="NewTodoForm-submit">
            <i type="submit" className="far fa-plus-square" />
          </button>
          <button type="button" className="clearTodoList" onClick={this.handleClear}>CLEAR</button>
        </form>
        
      </div>
    );
  }
}

export default NewTodoForm;
