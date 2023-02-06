import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CurrentSession from './CurrentSession'
import LastSession from './LastSession'
import MoveToNextStudentPop from './MoveToNextStudentPopUp'
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
  const [activeSession, setActiveSession] = useState(null)
  const [displayNextStudentPop, setDisplayNextStudentPop] = useState(false)
  // console.log('active', activeSession)
  // console.log('pop', displayNextStudentPop)

  const events = useSelector((state) => state.events)

  useEffect(() => {
    dispatch(fetchEvents())
    dispatch(fetchStudents())
  }, [])

  useEffect(() => {
    //GET TODAYS EVENTS
    let sortedArray = []
    //TODO better if condition
    if (Object.keys(events).length < 1) {
      // console.log(' no eventData')
    } else {
      sortedArray = events?.filter((x) =>
        moment(x.start).isSame(momentNow, 'day')
      )
    }

    //GET CURRENT SESSION
    let result = sortedArray.filter((x) => {
      if (sessionIsNow(moment(x.start), moment(x.end))) {
        return x
      }
    })

    // console.log('now session', result)
    // console.log('todays events', sortedArray)
    // console.log('result', result, result[0]?.end)
    let endOfSession = null
    if (result.length > 0) {
      endOfSession = moment(result[0]?.end)
    }
    let timeTillEnd = momentNow.diff(endOfSession)
    // console.log('end', endOfSession)
    // console.log('time till', timeTillEnd)

    if (!activeSession) {
      dispatch(setTodaysFormData(result[0] || {}))
    }

    //only setting timeout once event has loaded
    setTimeout(function () {
      setDisplayNextStudentPop(true)
      // console.log('nope', timeTillEnd)
      // console.log(endOfSession)
    }, timeTillEnd * -1 || 100000)
  }, [events])

  function sessionIsNow(start, end) {
    if (
      momentNow.diff(start, 'hours', true) > 0 &&
      momentNow.diff(end, 'hours', true) < 0
    ) {
      setActiveSession(true)
      return true
    } else return false
  }

  function nextStudentpop(bool) {
    // console.log('next student fired')
    setDisplayNextStudentPop(bool)
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
      {displayNextStudentPop ? (
        <MoveToNextStudentPop setNextStudentState={nextStudentpop} />
      ) : null}
      {displayCurrent ? <CurrentSession /> : <LastSession />}
    </>
  )
}
