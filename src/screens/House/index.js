import React, { useState, useEffect } from 'react'

const getHouse = async (id) => {
  return await fetch(`https://www.anapioficeandfire.com/api/houses/${id}`)
    .then(r => r.json())
    .catch(console.error)
}

export default function House(props) {
  const [ house, setHouse ] = useState({})

  useEffect(() => {
    !house.name && (async () => setHouse(await getHouse(props.match.params.id)))()
  })

  return <div>
    <span>name: {house.name}</span>
  </div>
}
