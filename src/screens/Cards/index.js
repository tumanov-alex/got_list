import React, { useState, useEffect } from 'react'
import _uniqueId from 'lodash.uniqueid'
import Card from '../Card'
import './index.scss'

export default function Cards() {
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

  return (
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
  )
}
