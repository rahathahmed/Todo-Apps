import React, { Component } from 'react'
import TodoCreate from './TodoCreate';

export default class Todolist extends Component {
  state = {
    todos: [
      {
        title: "",
        status: "",
      },
    ],
  };

  render() {
      const addToDo = (todo) => {
        let newTodo = this.state.todos.slice();
        newTodo.unshift(todo)
        this.setState({
          todos: newTodo
        })
      };
      const deleteNote = (index) => {
         let newTodo = this.state.todos.slice();
         newTodo.splice(index,1);
         this.setState({
           todos: newTodo,
         });
       };

      const editTodo =(element) => {
       let newTodo = this.state.todos.slice();
       newTodo.unshift(element);
       this.setState({
         todos: newTodo,
       });
      }
     
    return (
      <div className="wrapper col-md-7 col-sm-12">
        <h2>Todo List </h2>

        <TodoCreate onCreateTodo={(todo) => addToDo(todo)} />

        {this.state.todos.map((element, index) => (
          <ul className="list-group">
            <li className={element.title ?  "list-group-item listBg" : "defaultList"}>
              <div className="float-start">{element.title}</div>
              <div className="float-end">
                {element.title && (
                  <div>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteNote(index)}
                    >
                      {" "}
                      Delete
                    </button>{" "}
                  </div>
                )}
              </div>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
