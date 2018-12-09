import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './utils/BooksAPI'

class SearchPage extends Component {
  state = {
    books: [],
    query: ''
  }

  handleQueryChange = (event) => {
    const query = event.target.value || ''

    this.setState(() => {
      return { query: query }
    }, this.fetchBooks)
  }

  fetchBooks = () => {
    const { query } = this.state
    BooksAPI.search(query)
      .then((books) => {
        // if some books array returns from server, assign it to the state
        // otherwise assign empty array
        books && books.constructor === Array
          ? this.setState(() => ({ books }) )
          : this.setState(() => ({ books: [] }) )
      })
  }

  render() {
    const { books, query } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              value={query}
              onChange={this.handleQueryChange}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { books.map(book => <Book
              key={book.id}
              book={book}
            />)}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage;