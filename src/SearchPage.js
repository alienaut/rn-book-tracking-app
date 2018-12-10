import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './utils/BooksAPI'

class SearchPage extends Component {
  static propTypes = {
    onShelfUpdate: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  state = {
    searchedBooks: [],
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
      .then((searchedBooks) => {
        // if some books array returns from server, assign it to the state
        // otherwise assign empty array
        searchedBooks && searchedBooks.constructor === Array
          ? this.setState(() => ({ searchedBooks }))
          : this.setState(() => ({ searchedBooks: [] }))
      })
  }

  render() {
    const { searchedBooks, query } = this.state
    const { onShelfUpdate, books } = this.props

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
            { searchedBooks.map(book => <Book
              key={book.id}
              book={book}
              books={books}
              onShelfUpdate={onShelfUpdate}
            />)}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage;