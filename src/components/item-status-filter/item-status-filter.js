import React from 'react';

import './item-status-filter.css';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' }
];

export default class ItemStatusFilter extends React.Component{

  render(){
    const buttons = filterButtons.map(({name, label}) => {
      const isActive = name === this.props.filter;
      const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');
  
      return (
        <button key={name}
                type="button"
                onClick={() => this.props.onFilterChange(name)}
                className={classNames}>{label}</button>
      );
    });
    return (
      <div className="btn-group">
          {buttons}
      </div>
    )
  }
}