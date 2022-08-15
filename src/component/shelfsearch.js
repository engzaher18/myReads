import React from "react";
import Book from "./book";
 const ShelfSearch=({loadSearch,booksFromSearch,changeShelf})=> {
    
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">Search</h2>
            <div className="bookshelf-books">

            <ol className="books-grid">
           
            {
              loadSearch?(
                
                
                  booksFromSearch.map((book)=>(
                     <Book key={book.id} book={book} changeShelf={changeShelf}/>)
                  
                    
                  )
                
              ):(
                booksFromSearch.array
              )
            }
         
             
            </ol>
                
         
          </div>
          </div>
        
        )

    };
  

    export default ShelfSearch;



