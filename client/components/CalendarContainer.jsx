import React, { useState, useEffect } from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'

// import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)
// const initEvent = {
//   start: ' ',
//   end: ' ',
//   title: ' ',
// }

export default function MyCalendar(props) {
  const [events, setEvents] = useState(props.eventsData)
  console.log(events)


  function handleSelect({ start, end }) {
    //TODO make title student name-via form?
    //Add newEvent to redux state
    let title = props.student
    console.log(title)
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
