import React, { useState, useEffect } from 'react'

const getCharacter = async (id) => {
  return await fetch(`https://www.anapioficeandfire.com/api/characters/${id}`)
    .then(r => r.json())
    .catch(console.error)
}

export default function Character(props) {
  const [ character, setCharacter ] = useState({})

  useEffect(() => {
    !character.name && (async () => setCharacter(await getCharacter(props.match.params.id)))()
  })

  console.log(character)

  return <div>
    <span>name: {character.name}</span>
  </div>
}
