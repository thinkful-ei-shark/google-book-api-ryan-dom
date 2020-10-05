import React, { Component } from 'react';
import './App.css';
import Search from './Components/SearchItems/Search';
import BookList from "./Components/BookResults/BookList";
import BookItem from "./Components/BookResults/BookItem";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchItems/SearchBar";


class App extends Component {
  state = {
    search: "",
    printType: null,
    bookType: null,
    results: {},
  };

  handleSearchClicked = (e) => {
    e.preventDefault();
    console.log("Handle Search has been clicked");
    let search = e.target.searchinput.value;
    let printType = e.target.printType.value;
    let bookType = e.target.bookType.value;

    this.setState({
      search: search,
      printType: printType,
      bookType: bookType,
    });
  };




  
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <SearchBar >
          <Search handleSearchClicked={this.handleSearchClicked} />
        </SearchBar>
        <BookList>
          <BookItem />
        </BookList>
      </div>
    );
  }
}
 
export default App;