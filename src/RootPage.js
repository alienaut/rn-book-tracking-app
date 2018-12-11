import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const RootPage = ({ books, onShelfUpdate }) => {
  const shelves = [
    { title: 'Currently Reading', slug: 'currentlyReading'},
    { title: 'Want to Read', slug: 'wantToRead'},
    { title: 'Read', slug: 'read' }
  ]

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          { shelves.map(shelf => (
            <BookShelf
              key={shelf.slug}
              title={shelf.title}
              slug={shelf.slug}
              books={books}
              onShelfUpdate={onShelfUpdate}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link
          to="/search"
        >Add a book</Link>
      </div>
    </div>
  )
}

RootPage.propTypes = {
  onShelfUpdate: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}

export default RootPage