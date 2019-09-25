import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import uuid from 'uuid';
import './TodoList.css';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    const newTodo = { task: todo, id: uuid() };
    this.setState((state) => ({
      todos: [...state.todos, newTodo]
    }));
  }

  editTodo(editedTodo) {
    this.setState((state) => ({ todos: [...state.todos, editedTodo] }));
  }

  removeTodo(id) {
    const minusTodo = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: minusTodo });
  }

  render() {
    const todoListItems = this.state.todos.map((todo) => {
      return (
        <Todo 
          key={todo.id} 
          todo={todo} 
          remove={this.removeTodo} 
          edit={this.editTodo} 
        />
      );
    });
    return (
      <div className="TodoList">
        <h1>FUGLY TODO LIST </h1>
        <ul className="TodoList-list">{todoListItems}</ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}
