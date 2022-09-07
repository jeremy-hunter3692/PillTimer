import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import CurrentSession from './CurrentSession'
import LastSession from './LastSession'
import { addSession, getSessionById, getAllSessions } from '../apiClient'
// import { Statement } from 'sqlite3'

const initSession = {
  date: 'init',
  hour: '12',
  studentNotes: 'init',
  teacherNotes: 'init',
}

const oldSession = {
  date: '12.12.34',
  hour: 3,
  studentNotes: 'ollllllld student notes',
  teacherNotes: 'Ye olllllld teacher notes',
}
// let sessionSelector = 0
//
const App = () => {
  const [state, setState] = useState([oldSession, initSession, true])
  // console.log(state)
  // const [selector, setSelector] = useState(true)
  // console.log(state[0])

  function handleChange(name, value) {
    setState([state[0], { ...state[1], [name]: value }, state[2]])
    console.log('TOP 2:', state[1])
  }

  // useEffect(() => {
  //   // console.log('use effect')
  //   getAllSessions()
  //     .then((data) => {
  //       setState([data, ...state])
  //     })
  //     .catch((err) => {
  //       console.error(err.message)
  //     })
  // }, [])
  // console.log('from use', state)
  return (
    <>
      <Nav />
      <button
        className="clickMe"
        onClick={(e) => {
          e.preventDefault()
          setState([state[0], state[1], (state[2] = true)])
          // console.log(state)
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
        <LastSession state={state[0]} handleChange={handleChange} />
      ) : (
        <CurrentSession state={state[1]} handleChange={handleChange} />
      )}
    </>
  )
}

export default App
