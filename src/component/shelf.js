import React from "react";
import Book from "./book";

const Shelf=({section,books,category,changeShelf})=>{
  
  const bookCategory=books.filter((book)=> book.shelf===category);
  console.log(books)
    return(
        <div className="bookshelf">
                <h2 className="bookshelf-title">{section}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  
                      {bookCategory.map((book) => (
                        
                        <Book key={book.id} book={book} changeShelf={changeShelf}/>
                     
                        
    ))}
                  </ol>
                </div>
              </div>
    )
}

export default Shelf;