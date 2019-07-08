import React from 'react'

export default function EmojiLabel({ emoji, label }) {
  return <div style={{ marginBottom: 5 }}>
    <span role='img' aria-label={`${label} emoji`}>{ emoji }</span>
    { label }
  </div>
}
