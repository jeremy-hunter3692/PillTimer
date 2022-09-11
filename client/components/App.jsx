import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import CurrentSession from './CurrentSession'
import LastSession from './LastSession'
import Display from './Display'
import { addSession, getSessionById, getAllSessions } from '../apiClient'

const date = new Date().toISOString()

const initSession = {
  date: date.slice(2, 10),
  hour: date.slice(11, 13),
  studentNotes: ' ',
  teacherNotes: ' ',
  name: ' ',
}

const App = () => {
  const [state, setState] = useState([{}, initSession, true])

  function handleChange(name, value) {
    setState([state[0], { ...state[1], [name]: value }, state[2]])
    // console.log('TOP 2:', state[1])
  }

  //Submits the form text contents when the submit button is clicked
  function handleSubmit(newSession) {
    //Filtering form level info to fit api/db calls
    delete newSession.name
    addSession(newSession)
  }

  useEffect(() => {
    getAllSessions()
      .then((data) => {
        //select last session and put them in the state for display
        //TODO make the db call just fetch the last one? Seems overkill to load everythiing here
        const index = data.length - 1
        setState([
          data[index],
          { ...initSession, name: data[index].name },
          true,
        ])
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <Nav />
      {/* buttons change ternary state while preserving the rest of the state */}
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
      {/* to display last or current session depending on state ternary as well as display componenet for session details */}
      {state[2] ? (
        <>
          <Display state={state[0]} /> <h1>Last Session:</h1>
          <LastSession state={state[0]} />
        </>
      ) : (
        <>
          {' '}
          <Display state={state[1]} />
          <h1>Current Session:</h1>
          <CurrentSession
            state={state[1]}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </>
  )
}

export default App
