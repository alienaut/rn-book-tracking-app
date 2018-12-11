import React from 'react'
import PropTypes from 'prop-types';
import Book from './Book'

const BookShelf = ({ title, slug, books, onShelfUpdate }) => (
  <div className="bookshelf">
  <h2 className="bookshelf-title">{ title }</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
      {books
        .filter(book => book.shelf === slug)
        .map(book =>
          <Book key={book.id} book={book} onShelfUpdate={onShelfUpdate} />
        )
      }
    </ol>
  </div>
</div>
)

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  onShelfUpdate: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}

export default BookShelf;