import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component {
  
  state={
    term:""
  }
  onTermChange = (e) => {
    const {onSearchChange = () => {}} = this.props;
    this.setState({
      term: e.target.value
    });

    onSearchChange(e.target.value);
  };
  render (){
    return(
     <form

     className="bottom-panel d-flex"
     onSubmit={this.onSubmit}> 

      <input type="text"
                  className="form-control new-todo-label"
                  value={this.state.label}
                  onChange={this.onTermChange}
                  placeholder="type to search"
      />
      </form>
    );
  }
}
