import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends React.Component{

  maxId = 1;
  state = {
    todoData : [
      this.createNewItem("Drink coffee"),
      this.createNewItem("Make Awesome App"),
      this.createNewItem("Have a lunc")
    ]
  }
  createNewItem (label){
    return{
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }
  getMaxId(){
    let maxId = 0;
    const {todoData} = this.state;
    todoData.forEach((elem) => {
      if(elem.id > maxId){
        maxId = elem.id;
      }
    });
    console.log(maxId);
    return maxId;
  }

  deleteItem = (id) =>{
    this.setState((state) =>{
      const idx = state.todoData.findIndex((el) => el.id === id);
      console.log(idx);
      
      const before = state.todoData.slice(0,idx);
      const after = state.todoData.slice(idx + 1);
      return{
        todoData: [...before, ...after]
      }
    });
  }
  toggleProperty(arr, id, propName){
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];

    const item = { ...arr[idx], [propName]: value } ;
    console.log(item,"deleted");
    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ];
  }
  onToggleImportant = (id) => {
    this.setState((state) => {
      const todoData = this.toggleProperty(state.todoData, id, 'important');
      return { todoData };
    });
  }
  onToggleDone = (id) => {
    this.setState((state) => {
      const todoData = this.toggleProperty(state.todoData, id, 'done');
      return { todoData };
    });
  }
  doneItems(){
    let res = 0;
    const {todoData} = this.state;
    todoData.forEach((elem)=>{
      if(elem.done){
        res++;
      }
    });
    return res;
  }

  addNewItem = (text) => {
    this.setState((state) =>{
      let maxId = 0;
      
      this.state.todoData.forEach((elem) => {
        if(elem.id > maxId){
          maxId = elem.id;
        }
      });
      const newId = maxId + 1;
      
      const newItem = {id: newId, label: text, important: false, done: false};
      const todoData = [...state.todoData, newItem];
      return{
        todoData
      };
    });
  }
  render(){
    return (
      <div className="todo-app">
        <AppHeader toDo={this.state.todoData.length - this.doneItems()} done={this.doneItems()} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList 
          todos={this.state.todoData} 
          onDeleted = {this.deleteItem}
          onToggleImportant = {this.onToggleImportant}
          onToggleDone = {this.onToggleDone}
          />
        <ItemAddForm 
          addNewItem = {this.addNewItem}
        />
      </div>
    );
  }
}