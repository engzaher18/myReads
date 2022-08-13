import React from "react";
import { Link } from "react-router-dom";
import ShelfSearch from './shelfsearch'

const Search=({handleSearch,booksFromSearch,changeShelf,loadSearch})=>{
    return(
        
        <div className="search-books">
          <div className="search-books-bar">
          <Link to="/" className="close-search">close</Link>
           
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN" onChange={handleSearch}
              />
            </div>
          </div>
           {
            
              <ShelfSearch booksFromSearch={booksFromSearch} changeShelf={changeShelf} loadSearch={loadSearch}/>
          
           }
                
          
         
           
            
         
        
        </div>
       
    )
}

export  default Search;



