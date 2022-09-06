import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import CurrentSession from './CurrentSession'
import LastSession from './LastSession'
import { addSession, getSessionById, getAllSessions } from '../apiClient'
// import { Statement } from 'sqlite3'

const initSession = {
  date: 'none loaded',
  hour: 4,
  studentNotes: 'none yet Loaded student',
  teacherNotes: 'none  teacher yet Loaded',
}

const oldSession = {
  date: '12.12.34',
  hour: 3,
  studentNotes: 'ollllllld student notes',
  teacherNotes: 'Ye old teacher notes',
}
// let sessionSelector = 0
//
const App = () => {
  const [state, setState] = useState([oldSession, initSession])
  const [selector, setSelector] = useState(false)
  console.log(state[0])
  function handleChange(data) {
    // console.log(data.name)
    setState([
      state[0],
      (state[1] = { ...state[1], studentNotes: data.studentNotes }),
    ])
    console.log(state[1])
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
          setSelector(true)
        }}
      >
        Load Last Session
      </button>
      {/*  */}
      <button
        className="clickMe"
        onClick={(e) => {
          e.preventDefault()
          setState([...state])
          setSelector(false)
          // setState([
          //   state[0],
          //   (state[1] = {
          //     date: 'new data',
          //     hour: 4,
          //     studentNotes: 'new notet',
          //     teacherNotes: 'NEWWW',
          //   }),
          // ])

          console.log('current load', state)
        }}
      >
        Load Current Session
      </button>
      {selector ? (
        <LastSession state={state[0]} handleChange={handleChange} />
      ) : (
        <CurrentSession state={state[1]} handleChange={handleChange} />
      )}
    </>
  )
}

export default App
