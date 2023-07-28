import React from 'react'

import { Link } from 'react-router-dom'

let now = new Date().toString()
let utcnow = new Date()
let utc = utcnow.toUTCString()
export default function navBar() {
  return (
    <>
      <div className="nav">
        <header>
          <h1>Personal Project: two boxes</h1>
          <Link to="/">Home</Link>
          <Link to="/calendar">Calendar</Link>
          <h2>The time is {now} </h2>
          <h3>The UTC time is {utc} </h3>
        </header>
      </div>
    </>
  )
}
