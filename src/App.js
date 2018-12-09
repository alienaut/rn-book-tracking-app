import React from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import RootPage from './RootPage'
import './App.css'

class BooksApp extends React.Component {
  state = { }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={RootPage} />
        <Route path="/search" component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp
