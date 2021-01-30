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

  render() {
    const { todo } = this.state;
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <header style={{ margin: '20px 0 40px 0' }} className="App-header col col-12">
              <h1>React & Firebase Todo App</h1>
            </header>
            <main className="col col-12">
              <form style={{ marginBottom: '20px' }}>
                <input
                  value={todo}
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  placeholder="Enter todo here...[Press Enter]"
                  autoComplete="off"
                />
              </form>
              <ul className="todos list-groups" style={{ padding: 0 }}>
                <li className="todo list-group-item">
                  <input className="form-control" type="checkbox" />
                  <span
                    style={{
                      top: 0,
                      bottom: 0,
                      left: '3rem',
                      right: '5rem',
                      lineHeight: '62px',
                      display: 'block',
                      position: 'absolute',
                    }}
                  >
                    Write this code
                  </span>
                  <button
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
                <li className="todo list-group-item">
                  <input className="form-control" type="checkbox" />
                  <span
                    style={{
                      top: 0,
                      bottom: 0,
                      left: '3rem',
                      right: '5rem',
                      lineHeight: '62px',
                      display: 'block',
                      position: 'absolute',
                    }}
                  >
                    Write this code
                  </span>
                  <button
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
              </ul>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
