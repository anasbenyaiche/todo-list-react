import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      todolist: ["sleeping", "eating"],
      textDecoration: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "toDoTask") {
      this.setState({ value: event.target.value });
      console.log(this.state.value);
    } else {
    }
  }
  handleClick(event) {
    console.log(event.target.value);
    if (event.target.style.textDecoration === "line-through") {
      event.target.style.textDecoration = "";
    } else {
      event.target.style.textDecoration = "line-through";
    }
  }

  render() {
    return (
      <div>
        <label>Enter you're task</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          name="toDoTask"
        ></input>
        <button
          onClick={() =>
            this.setState({ todolist: this.state.todolist.concat(this.state.value) })
          }
        >
          Add
        </button>
        <ul name="todolist" onChange={this.handleChange}>
          {this.state.todolist.map((task, i) => (
            <li onClick={this.handleClick}>
              {task}
              <button
                style={{backgroundColor:"red"}}
                onClick={() => this.setState(this.state.todolist.splice(i, 1))}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
