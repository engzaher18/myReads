import React from "react";
import { Link } from "react-router-dom";
import Shelf from './shelf'

const Home=({books,changeShelf})=>{
    return(
        <div>
      
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            <Shelf section="Currently Reading" books={books} category="currentlyReading" changeShelf={changeShelf}/>
            <Shelf section="Want To Read" books={books} category="wantToRead" changeShelf={changeShelf}/>
            <Shelf section="Read" books={books} category="read" changeShelf={changeShelf}/>
            
              
            </div>
          </div>
          <div className="open-search">
            <Link to="/search" className="open-search-link">Add a book</Link>
          </div>                                  
        </div>
        </div>
        
    )
}

export  default Home;