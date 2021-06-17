import React from 'react';

const TodoListItem = (props) => {
  const color = {
    color: props.important ? 'tomato': 'black'
  };
  return <span style={color}>{props.label}</span>;
};

export default TodoListItem;