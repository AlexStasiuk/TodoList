import React from 'react';

import TodoListItem from './todo-list-item/todo-list-item';

const TodoList = (props) => {
    const elements = props.todos.map((item) =>{
        return (
            <li key={item.id}><TodoListItem label={item.label} important={item.important}/></li>
        );
    });
  return (
    <ul>
        {elements}
    </ul>
  );
};

export default TodoList;