import React, { useState, useEffect } from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import { useSelector } from 'react-redux'

// import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)
const initEvent = [
  {
    start: ' ',
    end: ' ',
    title: 'init ',
  },
]

export default function MyCalendar(props) {
  const eventData = useSelector((state) => state.events)
  // console.log('1', eventData)
  const [events, setEvents] = useState([])

  useEffect(() => {
    // console.log(eventData)
    eventData[0] ? setEvents(eventData) : setEvents([])
  }, [eventData])

  function handleSelect({ start, end }) {
    //TODO make title student name-via form?
    //Add newEvent to redux state

    let title = props.student

    // get student name, get studentId

    if (title) {
      let newEvent = {
        start: start,
        end: end,
        title: title, // get student name, get studentId
        studentNotes: '',
        teacherNotes: '',
        name: title,
      }
      setEvents([...events, newEvent])
    }
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
    </div>
  )
}
