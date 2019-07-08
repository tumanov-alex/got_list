import React, { useEffect, useState } from 'react'
import './index.scss'
import _uniqueId from 'lodash.uniqueid'
import EmojiLabel from '../../common/components/EmojiLabel'
import Spinner from '../../common/components/Spinner'
import { Link } from "react-router-dom"

const getHouse = async (url) => {
  return await fetch(url)
    .then(r => r.json())
    .catch(console.error)
}

export default function Card({
  name,
  gender,
  born,
  died,
  titles,
  allegiances,
  url,
}) {
  const [ house, setHouse ] = useState({})
  const characterID = url.split('/').pop()
  const houseID = allegiances[0].split('/').pop()

  useEffect(() => {
    !house.name && (async () => setHouse(await getHouse(allegiances[0])))()
  })

  return <div className={`container ${gender.toLowerCase()}`}>
    <Link to={`/character/${characterID}`}>
      <div id='header'>{ name }</div>
    </Link>

    <div id='body'>
      <div id='basicInfo'>
        <EmojiLabel emoji='👶🏻' label={born} />

        {died && <EmojiLabel emoji='☠️' label={died} />}

        <Link to={`/house/${houseID}`}>
          <EmojiLabel emoji='🏠' label={house.name || <Spinner/>} />
        </Link>
      </div>

      <div id='titles'>
        <EmojiLabel emoji='👑' label='Titles: ' />

        <ul>
          {
            titles[0]
              ? titles.map(t => <li key={_uniqueId()}>{ t }</li>)
              : <li>none</li>
          }
        </ul>
      </div>
    </div>
  </div>
}
