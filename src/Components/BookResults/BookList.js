import React, { Component } from 'react';


class BookList extends Component {

    render() { 
        return ( 
            <div className="book-container">
                {this.props.children}
            </div>
         );
    }
}
 
export default BookList;