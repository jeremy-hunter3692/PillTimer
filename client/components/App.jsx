import React, { useState } from 'react'
import Nav from './Nav'
import CurrentSession from './CurrentSession'
import LastSession from './LastSession'
import { addSession, getSessionById, getAllSessions } from '../apiClient'


let sessionSelector = 0
const App = () => {
 
  const [selectedSession, setSelectedSession] = useState('')
  const [currentSession, setCurrentSession] = useState(false)
  // console.log(sessionInfo[0])
  //get all notes and then check somewhere to get the last seesion.
  //on click for load last session have boolen


  console.log('state:', selectedSession)

  function addFormText(notes) {
    setSelectedSession({ ...selectedSession, studentNotes: notes })
  }

  return (
    <>
      <Nav />
      <button
        className="clickMe"
        onClick={(e) => {
          e.preventDefault()
          setCurrentSession(false)
        }}
      >
        Load Last Session
      </button>
      {/*  */}
      <button
        className="clickMe"
        onClick={(e) => {
          e.preventDefault()
          setCurrentSession(true)
        }}
      >
        Load Current Session
      </button>
      {currentSession ? <CurrentSession /> : <LastSession />}

    </>
  )
}

export default App
