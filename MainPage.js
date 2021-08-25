import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import HeaderElement from './HeaderElement';

class MainPage extends Component {
  
  render(){

           const totalBooks = this.props.books;
           const shelfInfos = [
                         { shelfTitle: 'Currently Reading', key: 'currentlyReading' },
                       { shelfTitle: 'Want To Read', key: 'wantToRead' },
                       { shelfTitle: 'Read', key: 'read' }
                     ];
           const books = [...shelfInfos, ...totalBooks]; 
           //const putBookOnShelves = (()=>{}());
        
   return (

       <div className="list-books">
          <HeaderElement />
     
    <div className="list-books-content">
       <div>
         {
               books.filter(book => book.shelfTitle).map(book => 

             <div className="bookshelf">
                 <h2 className="bookshelf-title">{book.shelfTitle}</h2>

                     <div className="bookshelf-books">

                           <ol className="books-grid">

                             {
                           books
                                 .filter(book => book.shelf === 
                                    (()=>{
                                      if(book.shelf === 'currentlyReading'){
                                        return 'currentlyReading';
                                      } else if(book.shelf === 'wantToRead'){
                                        return 'wantToRead';
                                      }else {
                                        book.shelf = 'read';
                                        return 'read';
                                      }
                                    })
                                  
                              )
                                 .map(book => (
                                     <li key={book.id}>
                                   <Book
                                     book={book}
                                     moveShelf={this.props.moveShelf}
                                     currentShelf = "{book.shelf}"
                                   />
                                 </li>
                                   
                                   ))
                             }
                             
                           </ol>
                     </div>
             </div> 

               )

         }
     </div>
   </div>
   <div className="open-search">
     <Link 
         to="/search"
     > Add a book
       </Link>
   </div>
 </div>
   
   

   );
   } } 




export default MainPage;


