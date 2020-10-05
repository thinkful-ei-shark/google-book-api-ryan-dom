import React, { Component } from 'react';

class BookItem extends Component {

    getBooks = () => {
        let books = this.props.results.map((book) => {
          let bookTitle = book.volumeInfo.title;
          let bookAuthor = book.volumeInfo.authors;
          let bookDesc = book.volumeInfo.description;
            let bookPrice =
              book.volumeInfo.saleInfo
                ? book.volumeInfo.saleInfo.listPrice.amount
                : 'no price info';
          return (
            <div className="bookResult">
              <ul>
                <li>Book Title: {bookTitle}</li>
                <li>Author: {bookAuthor}</li>
                <li>Price : ${bookPrice}</li>
                <li>{bookDesc}</li>
              </ul>
            </div>
          );
        });
        return books;
    }

    render() { 
        const { results } = this.props

        console.log(this.props.results)
        return ( 
            <>
            {this.getBooks()}
            </>
         );
    }
}
 
export default BookItem;