import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Nav from './Nav'
import CurrentSession from './CurrentSession'
import LastSession from './LastSession'
import Display from './Display'
import { addSession, getSessionById, getAllSessions } from '../apiClient'
import {
  setLastSessionFormData,
  setTodaysFormData,
  getTodaysFormData,
} from '../Actions/formActions'
// const date = new Date().toISOString()

// const initSession = {
//   date: date.slice(2, 10),
//   hour: date.slice(11, 13),
//   studentNotes: ' ',
//   teacherNotes: ' ',
//   name: ' ',
// }

const App = () => {
  const dispatch = useDispatch()
  const [displayCurrent, setDisplayCurrent] = useState(false)
  useEffect(() => {
    getAllSessions()
      .then((data) => {
        dispatch(setLastSessionFormData(data[0]))
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <Nav />

      {/* <button
        className="clickMe"
        onClick={(e) => {
          e.preventDefault()
          setState([state[0], state[1], (state[2] = false)])
        }}
      >
        Load Current Session
      </button>
      {state[2] ? (
        <>
          <Display state={state[0]} /> <h1>Last Session:</h1>
          <LastSession state={state[0]} />
        </>
      ) : (
        <>
          {' '}
          <Display state={state[1]} /> */}

      <button
        className="clickMe"
        onClick={(e) => {
          e.preventDefault()
          setDisplayCurrent(!displayCurrent)
        }}
      >
        Load Last Session
      </button>
      {displayCurrent ? <CurrentSession /> : <LastSession />}
    </>
    //   )}
  )
}

export default App
