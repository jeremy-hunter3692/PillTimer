import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CurrentSession from './CurrentSession'
import LastSession from './LastSession'
import moment from 'moment'
import { fetchEvents } from '../Actions/eventsActions'
import { fetchStudents } from '../Actions/studentsActions'
import { setTodaysFormData } from '../Actions/currentFormActions'

//Is this the best place to get the currrent time?
const momentNow = moment()

export default function NotesDisplay() {
  const dispatch = useDispatch()
  //For changing session displays
  const [displayCurrent, setDisplayCurrent] = useState(false)
  const events = useSelector((state) => state.events)

  useEffect(() => {
    dispatch(fetchEvents())
    dispatch(fetchStudents())
  }, [])

  useEffect(() => {
    //GET TODAYS EVENTS
    let sortedArray = []
    //TO DO better if condition
    if (Object.keys(events).length < 1) {
      console.log(' no eventData')
    } else {
      sortedArray = events?.filter((x) =>
        moment(x.start).isSame(momentNow, 'day')
      )
    }
    //GET CURRENT SESSION
    let result = sortedArray.filter((x) => {
      if (sessionIsNow(moment(x.start), moment(x.end))) return x
    })
    dispatch(setTodaysFormData(result[0]))
  }, [events])

  function sessionIsNow(start, end) {
    if (
      momentNow.diff(start, 'hours', true) > 0 &&
      momentNow.diff(end, 'hours', true) < 0
    )
      return true
  }

  return (
    <>
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
