import React, { useState, useEffect } from 'react'
import AddText from './AddText'
import Nav from './Nav'
import { addSession, getSessionById, getAllSessions } from '../apiClient'

const initObj = {
  date: 'none loaded',
  hour: 0,
  studentNotes: 'none Loaded',
  teacherNotes: 'none Loaded',
}

const App = () => {
  const [sessionInfo, setSessionInfo] = useState(initObj)
  const [currentSession, setCurrentSession] = useState({})
  // console.log(sessionInfo[0])
  //get all notes and then check somewhere to get the last seesion.
  //on click for load last session have boolen
  useEffect(() => {
    getAllSessions()
      .then((data) => {
        setSessionInfo(data[0]) //data.length
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  console.log(sessionInfo)
  console.log(currentSession)
  // function loadLastSession() {}

  function addFormText(notes) {
    // addSession([...sessionInfo[0], sessionInfo[1]])
  }
  // console.log('date', sessionInfo.date)
  const displayInfo = `Notes for: ${sessionInfo.hour} am/pm on ${sessionInfo.date}`

  return (
    <>
      <Nav />
      <button
        className="clickMe"
        onClick={(e) => {
          e.preventDefault()
          // sessionInfo([se])
        }}
      >
        Load Last Session
      </button>
      <button
        className="clickMe"
        onClick={(e) => {
          e.preventDefault()
          setSessionInfo(sessionInfo[1])
          console.log(sessionInfo[1])
        }}
      >
        Load Current Session
      </button>
      <div className="formContainer">
        <h2>{displayInfo}</h2>
        <div className="studentNotes">
          <AddText addFormText={addFormText} title="Student Notes" />
          <br></br>
        </div>
        <div className="teacherNotes">
          <AddText addFormText={addFormText} title="Teacher Notes" />
        </div>
      </div>
    </>
  )
}

export default App
