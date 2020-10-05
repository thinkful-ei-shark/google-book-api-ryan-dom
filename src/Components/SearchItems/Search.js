import React, { Component } from 'react';



class Search extends Component {
 
    render() { 
        return (
          <div>
            <form class="search-box">
              <input
                type="text"
                id="search-input"
                placeholder="search here"
              ></input>
              <button id="search-button">Search</button>
            </form>
          </div>
        );
    }
}
 
export default Search;