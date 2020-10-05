import React, { Component } from 'react';



class Search extends Component {



    render() { 
        const { handleSearchClicked } = this.props;

        return (
          <div>
            <form class="search-box" onSubmit={handleSearchClicked}>
              <input
                type="text"
                id="search-input"
                placeholder="search here"
                name="searchinput"
              />
              <button id="search-button">Search</button>
              <div><wrap>
                <label for="printType">Select Print Type </label>
                <select id="printType">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </wrap>
              <wrap class="book-type-box">
                <label for="bookType"> Select Book Type </label>
                <select id="bookType">
                  <option value="a">a</option>
                  <option value="b">b</option>
                  <option value="c">c</option>
                  <option value="d">d</option>
                  <option value="e">e</option>
                </select>
              </wrap></div>
            </form>
          </div>
        );
    }
}
 
export default Search;