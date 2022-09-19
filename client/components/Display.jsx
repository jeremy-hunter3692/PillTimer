import React from 'react'

export default function Display(props) {
  return (
    <h2 className='displayDetails'>{`Notes for: ${props.state.name}. Time: ${props.state.hour}  pm.  Date  ${props.state.date}.`}</h2>
  )
}
