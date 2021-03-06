import React from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import RootPage from './RootPage'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  onShelfUpdate = (book, shelf) => {
    const updateBookState = (prevState) => ({
      books: [
        ...prevState.books.filter(b => b.id !== book.id),
        { ...book, shelf }
      ]
    })

    BooksAPI.update(book, shelf)
      .then(this.setState(updateBookState))
  }

  fetchBooks = () => {
    BooksAPI.getAll()
      .then((books) => { this.setState(() => ({ books })) })
  }

  componentDidMount() {
    this.fetchBooks()
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <RootPage books={books} onShelfUpdate={this.onShelfUpdate} />
        )} />
        <Route path="/search" render={() => (
          <SearchPage  onShelfUpdate={this.onShelfUpdate} books={books} />
        )} />
      </div>
    )
  }
}

export default BooksApp
