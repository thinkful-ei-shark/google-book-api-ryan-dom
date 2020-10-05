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
    printType: 'all',
    bookType: 'partial',
    results: [],
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
    this.getApiRequest(search,bookType,printType)
  };



  getApiRequest = (search, bookType, printType) => {
    let filterBookType = `&filter=${bookType}`
    let filterPrintType = `&printType=${printType}`
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}${filterBookType}${filterPrintType}`
    )
      .then((res) => res.json())
      .then((data) => {
        if(data === undefined){
          return []
        }
        this.setState({
          results: data.items,
        });
      })
      .catch(error => console.log(error))

  }

  
  render() {
    console.log(this.state.results);
    return (
      <div className="App">
        <Header />
        <SearchBar >
          <Search handleSearchClicked={this.handleSearchClicked} />
        </SearchBar>
        <BookList>
          <BookItem results={this.state.results}/>
        </BookList>
      </div>
    );
  }
}
 
export default App;