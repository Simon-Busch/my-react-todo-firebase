import React from 'react';
import Button from '../UI/Button/button';
import './tasks.css';

const tasks = (props) => (
  <div>
    {(props.todos.length === 0)
      ? (<li className="todo list-group-item">No todos yet</li>)
      : (props.todos.map((item, key) => (
        <li checked={item.done} key={`list-${(key + 1)}`} className="todo list-group-item">
          <input className="form-control" onChange={props.checkbox} checked={item.done} type="checkbox" />
          <span className="Span" style={{ textDecoration: (item.done) ? 'line-through' : 'none' }}>
            {item.text}
          </span>
          <Button action={props.handle} buttonName="&times;" />
        </li>
      )))}
  </div>
);

export default tasks;
