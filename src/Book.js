import React, { Component } from 'react'
import * as BooksAPI from './utils/BooksAPI'

class Book extends Component {
  state = {
    shelf:'none'
  }

  abortController = new AbortController();
  signal = this.abortController.signal;

  updateShelf = (event) => {
    const value = event.target.value
    const { book, onShelfUpdate } = this.props

    this.setState(() => ({ shelf: value }), onShelfUpdate(book, value))
  }

  componentDidMount() {
    const { book } = this.props
    // set current shelf
    BooksAPI.get(book.id)
      .then(book => {
        this.setState({ shelf: book.shelf || 'none' })
      })
  }

  render() {
    const { book } = this.props
    const { shelf } = this.state

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})`
              }}>
            </div>
            <div className="book-shelf-changer">
              <select value={shelf} onChange={this.updateShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          { book.authors && (
            <div className="book-authors">{book.authors.join(', ')}</div>
          )}
        </div>
      </li>
    )
  }
 }

export default Book