import React from 'react'
import SearchPage from './SearchPage'
import RootPage from './RootPage'
import './App.css'

class BooksApp extends React.Component {
  state = { }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage />
        ) : (
          <RootPage />
        )}
      </div>
    )
  }
}

export default BooksApp
