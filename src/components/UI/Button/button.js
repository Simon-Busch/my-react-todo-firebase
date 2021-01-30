import React from 'react';
import './button.css';

const button = (props) => (
  <button
    onClick={props.action}
    type="button"
    className="btn btn-sm btn-danger button-delete"
  >
    {props.buttonName}
  </button>
);

export default button;
