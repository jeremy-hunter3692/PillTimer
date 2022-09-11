import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import CurrentSession from './CurrentSession'
import LastSession from './LastSession'
import { addSession, getSessionById, getAllSessions } from '../apiClient'
// import { Statement } from 'sqlite3'

const initSession = {
  date: '',
  hour: '',
  studentNotes: '',
  teacherNotes: '',
}

const App = () => {
  const [state, setState] = useState([[], initSession, true])

  function handleChange(name, value) {
    setState([state[0], { ...state[1], [name]: value }, state[2]])
    // console.log('TOP 2:', state[1])
  }

  //Submits the form text contents when the submit button is clicked
  function handleSubmit(newSession) {
    console.log('app level', newSession)
    // addSession(newSession)
  }

  useEffect(() => {
    getAllSessions()
      .then((data) => {
        //select last session and put them in the state for display
        //TODO make the db call just fetch the last one? Seems over kill to load everythiing here
        const index = data.length - 1
        setState([data[index], initSession, true])
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <Nav />
      <button
        className="clickMe"
        onClick={(e) => {
          e.preventDefault()
          setState([state[0], state[1], (state[2] = true)])
        }}
      >
        Load Last Session
      </button>
      {/*  */}
      <button
        className="clickMe"
        onClick={(e) => {
          e.preventDefault()
          setState([state[0], state[1], (state[2] = false)])
        }}
      >
        Load Current Session
      </button>
      {state[2] ? (
        <LastSession state={state[0]} />
      ) : (
        <CurrentSession
          state={state[1]}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  )
}

export default App
