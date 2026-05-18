import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: [],
      item: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value
    });
  };

  handleAddItem = () => {

    const { item, list } = this.state;

    if (item.trim() !== "") {

      this.setState({
        list: [...list, item],
        item: ""
      });

    }
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.handleAddItem();
    }
  };

  render() {

    return (
        <div className="container mt-5">

          <div className="card shadow-lg p-4 rounded-4">

            <h1 className="text-center mb-4 text-primary fw-bold">
              Todo List
            </h1>

            {/* Input + Button */}
            <div className="d-flex gap-2 mb-4">

              <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Nhập công việc..."
                  value={this.state.item}
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyDown}
              />

              <button
                  className="btn btn-primary btn-lg"
                  onClick={this.handleAddItem}
              >
                Add
              </button>

            </div>

            {/* Danh sách */}
            <ul className="list-group">

              {this.state.list.length === 0 ? (
                  <li className="list-group-item text-center text-muted">
                    Chưa có công việc nào
                  </li>
              ) : (
                  this.state.list.map((todo, index) => (
                      <li
                          key={index}
                          className="list-group-item list-group-item-action"
                      >
                        {index + 1}. {todo}
                      </li>
                  ))
              )}

            </ul>

          </div>

        </div>
    );
  }
}

export default App;