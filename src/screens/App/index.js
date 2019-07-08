import React, { useState, useEffect } from 'react'
import './index.scss'
import Card from '../Card'
import _uniqueId from 'lodash.uniqueid'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Character from '../Character'
import House from '../House'

export default function App() {
  const [ cards, setCards ] = useState([])
  const [ page, setPage ] = useState(1)

  useEffect(() => {
    !cards.length && fetch(`https://www.anapioficeandfire.com/api/characters?pageSize=50&page=${
      page
    }`)
      .then((r) => r.json())
      .then((data) => setCards(data.filter((c) =>
        c.allegiances[0] && c.name && c.born
      )))
      .catch(console.error)
  })

  console.log(cards)

  return (
    <Router>
      <div id='container'>
        <div id="App">
          {cards.map((card) =>
            <Card
              key={_uniqueId()}
              {...card}
            />
          )}

          <button onClick={() => {
            setPage(page + 1)
            setCards([])
          }}>page { page + 1 } load</button>
        </div>
      </div>

      {/*<Route exact path='/' component={() => {}} />*/}
      <Route path='/character' component={Character} />
      <Route path='/house' component={House} />
    </Router>
  )
}
