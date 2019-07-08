import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Character from '../Character'
import House from '../House'
import Cards from '../Cards'

export default function App() {
  return (
    <Router>
      <Route exact path='/' component={Cards} />
      <Route path='/character/:id' component={Character} />
      <Route path='/house/:id' component={House} />
    </Router>
  )
}
