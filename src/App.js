import React, { Component } from 'react';
import './App.css';
import PrintType from './Components/SearchItems/PrintType';
import Search from './Components/SearchItems/Search';
import BookType from "./Components/SearchItems/BookType";
import BookList from "./Components/BookResults/BookList";
import BookItem from "./Components/BookResults/BookItem";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchItems/SearchBar";



class App extends Component {

  render() { 
    return (
      <div className="App">
        <Header />
        <SearchBar>
          <Search />
          <PrintType />
          <BookType />
        </SearchBar>
        <BookList>
          <BookItem />
        </BookList>
      </div>
    );
  }
}
 
export default App;