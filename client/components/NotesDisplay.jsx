import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CurrentSession from './CurrentSession'
import LastSession from './LastSession'
import moment from 'moment'
import { setLastSessionFormData } from '../Actions/lastFormActions'
import { fetchStudents } from '../Actions/studentsActions'
import { fetchEvents } from '../Actions/eventsActions'

//Only working by hours. need check for day
const now = new Date().getHours()
const dispatch = useDispatch()
export default function NotesDisplay() {
  const [displayCurrent, setDisplayCurrent] = useState(false)
  const events = useSelector((state) => state.events)
  //loading last session from the data base via apli client and then setting it in the state
  useEffect(() => {
    dispatch(fetchEvents())
    dispatch(fetchStudents())
  }, [])

  useEffect(() => {
    // console.log('use2', events)
    // console.log(events[events.length - 1]?.start)
    // console.log(
    //   moment(events[events.length - 1]?.start)?.format('DD-MM-YYYY'),
    //   moment(events[events.length - 1]?.start)?.format('hh:mm')
    // )
    // if (events.length > 0) {
    //   console.log('if')
    //   let result = events.find((x) => {
    //     // console.log(x.start)
    //     if (x.start.getHours() >= now && x.start.getHours() < now + 1) {
    //       return x
    //     }
    //   })
    //   //TOOOOO DOOOOO object is returning in student_id form intead of studentID form
    //   //Sort it out in routes and do tests to make sure this doesn't happened again Thanks.
    //   console.log('result in use', result)
    //   result
    //     ? getLastSessionById(result.studentId)
    //         .then((data) => {
    //           console.log('last sesh', data)
    //           dispatch(setLastSessionFormData(data))
    //         })
    //         .catch((err) => {
    //           console.error(err.message)
    //         })
    //     : console.log('not loaded: sessions')
    // }
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
