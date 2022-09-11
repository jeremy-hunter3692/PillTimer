import React from 'react'

export default function Display(props) {
  return (
    <h2>{`Notes for: ${props.state.name}. Time: ${props.state.hour}  am/pm.  On  ${props.state.date}.`}</h2>
  )
}
