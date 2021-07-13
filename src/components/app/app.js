import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todoData : [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
      ]
    };
    this.deleteItem = (id) =>{
      this.setState((state) =>{
        const idx = state.todoData.findIndex((el) => el.id === id);
        console.log(idx);
        
        const before = state.todoData.slice(0,idx);
        const after = state.todoData.slice(idx + 1);
        const newTodoData = [...before, ...after];
        return{
          todoData: newTodoData
        }
      });
    };
  }

  render(){
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList 
          todos={this.state.todoData} 
          onDeleted = {this.deleteItem}
          />
      </div>
    );
  }
}