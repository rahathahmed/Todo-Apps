import React, { Component } from 'react'

export default class TodoCreate extends Component {
  state = {
    title: "",
  };



  createTodo=()=>{
    if(this.state.title.length > 0){
        const todo = {
          title: this.state.title,
        }
        this.props.onCreateTodo(todo)
        this.setState({
          title: "",
        });
    }
    
  }

  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo "
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <button
            className={
              this.state.title == ""
                ? "btn btn-primary disabled"
                : "btn btn-primary"
            }
            type="button"
            id="button-addon2"
            onClick={this.createTodo}
          >
            <i class="fas fa-plus-square"></i> Add
          </button>
        </div>
      </div>
    );
  }
}
