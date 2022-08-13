import "./App.css";
import React, { useEffect, useState } from "react";
import * as BooksAPI from './BooksAPI'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from "./component/home";
import Search from "./component/search";

const App=()=> {

  const[books,setBooks]=useState([]);
  const[search,setSearch]=useState("");
  const[booksFromSearch,setBooksFromSearch]=useState([]);
  const[loadSearch,setLoadSearch]=useState(false);

  


  useEffect(()=>{
    BooksAPI.getAll().then((res)=>{
      
        setBooks(res)
     
    })
    
  },
  
  )

  const changeShelf= (book,shelf)=>{
    BooksAPI.update(book,shelf);
     BooksAPI.getAll().then((res)=>{
     
        setBooks(res)

      
    })
    handleBooksSearch(search)
  };
  const handleSearch= (event)=>{
     
      setSearch(event.target.value)
   
   
    handleBooksSearch(search)
  };

  const handleBooksSearch= (search)=>{
    if(search.length>0){
     BooksAPI.search(search).then((res)=>{
      if(res && !res.error){
       
          setBooksFromSearch(res.map((searchBook)=>{
            books.forEach((book)=>{
              if(searchBook.id===book.id) searchBook.shelf=book.shelf
            })
            return searchBook;
          }))

          setLoadSearch(true)
         
         
      
 
      }else{
        setLoadSearch(false)
        setBooksFromSearch ( 'no books found')
        
         
          
        
        
    }
  })

}}



  

    return (
      <Router>
    <div className="app">
    <Switch>
    <Route path="/search">
      <Search  handleSearch={handleSearch} search={search} changeShelf={changeShelf} booksFromSearch={booksFromSearch} loadSearch={loadSearch}/>
    </Route>
    <Route path="/">
        <Home books={books} changeShelf={changeShelf}/>
    </Route>
    
    
    </Switch>
    
    </div>
    </Router>
    )
    }
    
  




export default App;
