import React from 'react'
import PropTypes from 'prop-types';
import Book from './Book'

const BookShelf = ({ title, books, onShelfUpdate }) => (
  <div className="bookshelf">
  <h2 className="bookshelf-title">{ title }</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
      {books.map(book => <Book
        key={book.id}
        book={book}
        onShelfUpdate={onShelfUpdate}
      />)}
    </ol>
  </div>
</div>
)

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  onShelfUpdate: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}

export default BookShelf;