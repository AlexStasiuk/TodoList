import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component{

  constructor(){
    super();
    this.onClickLabel = ()=>{
      this.setState((state) =>{
        return{
          done: !state.done
        };
      });
    };
    this.onImportantClick = () =>{
      this.setState((state) =>{
        return{
          important: !state.important
        };
      });
    };
    this.state = {
      done: false,
      important: false
    };
  }

  render(){
    const { label, onDeleted } = this.props;
    let classNames = "todo-list-item";
    const {done, important} = this.state;
    if(done){
      classNames+=" done";
    }
    if(important){
      classNames+=" important";
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={this.onClickLabel}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onImportantClick}>
          <i className="fa fa-exclamation"/>
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
}