import React from 'react'
import { pokemonTypeColors } from '../utils'

function TypeCard(props) {
  return (
    <div className="inline-block rounded-lg font-bold text-center mr-4 py-1.5 px-2.5" style={{ color: pokemonTypeColors?.[props.type]?.color, background: pokemonTypeColors?.[props.type]?.background}}>
      <p>{props.type}</p>
    </div>
  )
}

export default TypeCard