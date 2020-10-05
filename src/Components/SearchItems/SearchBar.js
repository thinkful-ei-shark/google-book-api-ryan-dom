import React, { Component } from 'react';


class SearchBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='search-bar'>
                <p>This is the search bar</p>
                {this.props.children}
            </div>
         );
    }
}
 
export default SearchBar;