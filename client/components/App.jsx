import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Nav from './Nav'
import CurrentSession from './CurrentSession'
import LastSession from './LastSession'
import { getLastSessionById } from '../apiClient'
import { setLastSessionFormData } from '../Actions/lastFormActions'
import MyCalendar from './CalendarContainer.jsx'

// const date = new Date().toISOString()
const eventsData = [
  {
    start: new Date(2022, 9, 5, 10, 0, 0),
    end: new Date(2022, 9, 5, 11, 0, 0),
    title: 'First event', //student.name
    studentId: 3,
  },
  {
    start: new Date(2022, 9, 5, 13, 0, 0),
    end: new Date(2022, 9, 5, 14, 0, 0),
    title: 'Second event',
    studentId: 6,
  },
  {
    start: new Date(2022, 9, 5, 11, 0, 0),
    end: new Date(2022, 9, 5, 12, 0, 0),
    title: 'Third event',
    studentId: 8,
  },
]
const now = new Date().getHours()
// const hourplus = now.getHours() + 1
console.log('now', now)
const App = () => {
  const dispatch = useDispatch()
  const [displayCurrent, setDisplayCurrent] = useState(false)

  //loading last session from the data base via apli client and then setting it in the state
  useEffect(() => {
    //if current time is equally to a time in the eventsData array
    //get the id of the student who is attached to that event
    //get the last session where the id matches from the database
    //set in state
    let result = 'none'
    result = eventsData.find((x) => {
      if (x.start.getHours() >= now && x.start.getHours() < now + 1) {
        return x
      }
    })
    console.log('result', result, 'id', result.studentId)
    getLastSessionById(result.studentId)
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
      <MyCalendar eventsData={eventsData} />
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
