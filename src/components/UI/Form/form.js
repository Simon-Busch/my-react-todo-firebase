import React from 'react';

const form = (props) => (
  <form style={{ marginBottom: '20px' }} onSubmit={props.submit}>
    <input
      value={props.todo}
      name="todo"
      onChange={props.change}
      className="form-control"
      type="text"
      placeholder="Enter todo here...[Press Enter]"
      autoComplete="off"
    />
  </form>
);

export default form;
