import React, { Children } from 'react';
import './App.css';
import PrintType from './Components/PrintType';
// import Search from './Components/Search';
import BookType from "./Components/BookType";
import BookList from "./Components/BookList";
import BookItem from "./Components/BookItem";

function App() {
  return (
    <div className="App">
      <header className="App-header"><h1>This is the Header, Google Book Search</h1></header>
      <Search>
        <PrintType />
      </Search>

    </div>
  );
}

export default App;


function Search ({Children}) {


    function doTask(name) {
      console.log(`${name} has started`);
      const duration = Math.floor(Math.random() * 5000);
      setTimeout(() => {
        console.log(`${name} has ended after ${duration} milliseconds`);
      }, duration);
    }

    doTask("A");


        return ( 
            <div>
                <form className='search-bar'>
                    <input type='text' id='search-input' placeholder='search here'></input>
                    <button id='search-button'>Search</button>
                </form>
                {Children}
            </div>
         );

};