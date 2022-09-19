import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Nav from './Nav'
import CurrentSession from './CurrentSession'
import LastSession from './LastSession'
import Display from './Display'
import {
  addSession,
  getSessionById,
  getAllSessions,
  getLastSession,
} from '../apiClient'
import {
  setTodaysFormData,
  getTodaysFormData,
} from '../Actions/currentFormActions'
import { setLastSessionFormData } from '../Actions/lastFormActions'
// const date = new Date().toISOString()

const App = () => {
  const dispatch = useDispatch()
  const [displayCurrent, setDisplayCurrent] = useState(false)

  useEffect(() => {
    getLastSession()
      .then((data) => {
        console.log('app', data)
        dispatch(setLastSessionFormData(data))
      })
      .then(() => {
        dispatch(getTodaysFormData())
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
