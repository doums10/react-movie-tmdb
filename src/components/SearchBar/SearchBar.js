import React, { Component } from 'react';
import './SearchBar.css';
import FontAwesome from 'react-fontawesome';

class SearchBar extends Component
{
  state = {
    value: ''
  }

  render(){
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <FontAwesome className="rmdb-fa-search" name="search" icon="search" size="2x" />
          <input
            type="text"
            className="rmdb-searchbar-input"
            placeholder="Search"
            //onChange={doSearch}
            value={this.state.value}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar;
