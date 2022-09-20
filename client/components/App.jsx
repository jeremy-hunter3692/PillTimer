import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Nav from './Nav'
import CurrentSession from './CurrentSession'
import LastSession from './LastSession'
import { getLastSession } from '../apiClient'
import { setLastSessionFormData } from '../Actions/lastFormActions'

// const date = new Date().toISOString()

const App = () => {
  const dispatch = useDispatch()
  const [displayCurrent, setDisplayCurrent] = useState(false)

  //loading last session from the data base via apli client and then setting it in the state
  useEffect(() => {
    getLastSession()
      .then((data) => {
        dispatch(setLastSessionFormData(data))
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
          setDisplayCurrent(!displayCurrent)
        }}
      >
        {!displayCurrent ? 'Show Current Session' : 'Show Last Session'}
      </button>
      {displayCurrent ? <CurrentSession /> : <LastSession />}
    </>
  )
}

export default App
