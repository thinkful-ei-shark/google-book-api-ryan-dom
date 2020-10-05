import React, { Children, Component } from 'react';


function Search ({Children}) {

        return ( 
            <div>
                <form class='search-bar'>
                    <input type='text' id='search-input' placeholder='search here'></input>
                    <button id='search-button'>Search</button>
                </form>
                {Children}
            </div>
         );

};
 
export default Search;