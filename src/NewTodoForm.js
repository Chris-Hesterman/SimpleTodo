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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="NewTodoForm">
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
          <button>
            <i className="far fa-plus-square" />
          </button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
