import React, { Component } from 'react';


class BookList extends Component {

    render() { 
        return ( 
            <div className="book-container">
                <p>this is the book list that will contain each book item</p>
                {this.props.children}
            </div>
         );
    }
}
 
export default BookList;