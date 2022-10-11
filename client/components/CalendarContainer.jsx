import React, { useState, useEffect } from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { addEvents } from '../Actions/eventsActions'

// import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)
const initEvent = [
  {
    start: ' ',
    end: ' ',
    title: 'init ',
  },
]

export default function MyCalendar({ student }) {
  const dispatch = useDispatch()
  const eventData = useSelector((state) => state.events)
  console.log('1', student)
  const [events, setEvents] = useState([])
  const [newEvents, setNewEvents] = useState([])

  useEffect(() => {
    // console.log(eventData)
    eventData[0] ? setEvents(eventData) : setEvents([])
  }, [eventData])

  function handleSelect({ start, end }) {
    //TODO make title student name-via form?
    //Add newEvent to redux state

    let title = student.name
    let teacher = 4
    // imrpove this logic/defnsive stuff
    if (title != ' ') {
      let newEvent = {
        start: start,
        end: end,
        title: title, // get student name, get studentId
        studentNotes: '',
        teacherNotes: '',
        studentId: student.id,
        teacherId: teacher,
      }
      setNewEvents([...newEvents, newEvent])
      setEvents([...events, newEvent])
    }
  }

  //save on navigate away??
  function submit() {
    console.log('submit', newEvents)
    dispatch(addEvents(newEvents))
  }

  return (
    <div>
      <h1>Calender</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        defaultView={Views.DAY}
        selectable={true}
        onSelectSlot={handleSelect}
      />
      <button onClick={submit}>submit events</button>
    </div>
  )
}
