import React, { useState, useEffect } from 'react'
import AddText from './AddText'
import Nav from './Nav'
import { addSession, getSessionById, getAllSessions } from '../apiClient'

const App = () => {
  const initObj = {
    date: 'none loaded',
    hour: 0,
    studentNotes: 'none Loaded',
    teacherNotes: 'none Loaded',
  }

  const [sessionInfo, setSessionInfo] = useState(initObj)

  function loadLastSession() {
    getAllSessions()
      .then((data) => {
        const session = data[2]
        setSessionInfo(session)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  const displayInfo = `Notes for: ${sessionInfo.hour} am/pm on ${sessionInfo.date}`
  function addText(notes) {
    addSession(notes)
  }
  // console.log('date', sessionInfo.date)

  return (
    <>
      <Nav />
      <button
        className="clickMe"
        onClick={(e) => {
          e.preventDefault()
          loadLastSession()
        }}
      >
        Load Last Session
      </button>
      <div className="formContainer">
        <h2>{displayInfo}</h2>
        <div className="studentNotes">
          <AddText addText={addText} title="Student Notes" />
          <br></br>
        </div>
        <div className="teacherNotes">
          <AddText addText={addText} title="Teacher Notes" />
        </div>
      </div>
    </>
  )
}

export default App
