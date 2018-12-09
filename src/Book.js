import React, { Component } from 'react'

class Book extends Component {
  state = {
    thumbnailWidth: 0,
    thumbnailHeight: 0
  }

  componentDidMount() {
    const { book } = this.props

    // get thumbnail dimensions and assign it ot the state
    const thumbnail = new Image()

    thumbnail.onload = () => {
      this.setState(() => ({
        thumbnailWidth: thumbnail.width,
        thumbnailHeight: thumbnail.height
      }))
    }

    thumbnail.src = book.imageLinks && book.imageLinks.smallThumbnail
  }

  render() {
    const { book } = this.props

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: this.state.thumbnailWidth,
                height: this.state.thumbnailHeight,
                backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})`
              }}>
            </div>
            <div className="book-shelf-changer">
              <select>
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