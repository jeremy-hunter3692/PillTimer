import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CurrentSession from './CurrentSession'
import LastSession from './LastSession'
import moment from 'moment'
import { fetchEvents } from '../Actions/eventsActions'
import { fetchStudents } from '../Actions/studentsActions'
import { getLastSessionById } from '../sessionsAPI'
import { setLastSessionFormData } from '../Actions/lastFormActions'
import { setTodaysFormData } from '../Actions/currentFormActions'

//Only working by hours. need check for day
const now = new Date()
const momentNow = moment()

export default function NotesDisplay() {
  const dispatch = useDispatch()
  const [displayCurrent, setDisplayCurrent] = useState(false)
  const events = useSelector((state) => state.events)
  //loading last session from the data base via apli client and then setting it in the state

  useEffect(() => {
    dispatch(fetchEvents())
    dispatch(fetchStudents())
  }, [])

  useEffect(() => {
    //GET TODAYS EVENTS
    let sortedArray = []
    if (Object.keys(events).length < 1) {
      console.log(' no eventData')
    } else {
      // console.log(events, momentNow.format('DD/MM/YY'))
      sortedArray = events?.filter((x) =>
        moment(x.start).isSame(momentNow, 'day')
      )
    }
    console.log('sorted', sortedArray)
    //GET CURRENT SESSION
    let result
    if (events.length > 0) {
      result = sortedArray.filter(
        (x) => momentNow.diff(moment(x.start), 'hours', true) < 0
      )
    }
    console.log('res', result)
  }, [events])

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
