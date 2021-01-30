import React from 'react';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    todo: '',
    todos: [{
      text: 'A new todo name',
      done: false,
    }],
  };

  handleChange = (event) => {
    this.setState({
      todo: event.currentTarget.value,
    });
  }

  handleCheckbox = (index) => {
    const { todos } = this.state;
    todos[index].done = !todos[index].done;
    this.setState({
      todos,
    });
  }

  handleRemove = (index) => {
    // grab original todos from state
    const { todos } = this.state;
    // create an array excluding the array value based on the index
    this.setState({
      todo: '',
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index + 1),
      ],
    });
  }

  handleSubmit = (event) => {
    // grab original todos from state
    const { todos } = this.state;
    // todo text is result
    // append new todo with default state to todos
    this.setState({
      todo: '',
      todos: [
        {
          text: event.currentTarget.todo.value,
          done: false,
        },
        ...todos,
      ],
    });
    event.preventDefault();
  }

  render() {
    const { todo, todos } = this.state;
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <header style={{ margin: '20px 0 40px 0' }} className="App-header col col-12">
              <h1>React & Firebase Todo App</h1>
            </header>
            <main className="col col-12">
              <form style={{ marginBottom: '20px' }} onSubmit={this.handleSubmit}>
                <input
                  value={todo}
                  name="todo"
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  placeholder="Enter todo here...[Press Enter]"
                  autoComplete="off"
                />
              </form>
              <ul className="todos list-groups" style={{ padding: 0 }}>
                {(todos.length === 0)
                  ? (<li className="todo list-group-item">No todos yet</li>)
                  : (todos.map((item, key) => (
                    <li checked={item.done} key={`list-${(key + 1)}`} className="todo list-group-item">
                      <input className="form-control" onChange={() => this.handleCheckbox(key)} checked={item.done} type="checkbox" />
                      <span style={{
                        top: 0,
                        bottom: 0,
                        left: '3rem',
                        right: '5rem',
                        lineHeight: '62px',
                        display: 'block',
                        position: 'absolute',
                        textDecoration: (item.done) ? 'line-through' : 'none',
                      }}
                      >
                        {item.text}
                      </span>
                      <button
                        onClick={() => this.handleRemove(key)}
                        type="button"
                        className="btn btn-sm btn-danger"
                        style={{
                          position: 'absolute',
                          top: 0,
                          bottom: 0,
                          right: '1.25rem',
                          margin: 'auto 0',
                          height: '25px',
                          paddingTop: 0,
                          paddingBottom: 0,
                        }}
                      >
                        &times;
                      </button>
                    </li>
                  )))}
              </ul>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
