import React, { useState } from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
// import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)
const initEvent = {
  start: ' ',
  end: ' ',
  title: ' ',
}

export default function MyCalendar(props) {
  const [events, setEvents] = useState(props.eventsData)
  //TO DO adding new event
  const [newEvent, setNewEvent] = useState(initEvent)
  // const [view, setView] = useState(views.week)
  // const view = Views.DAY
  return (
    <div>
      <h1>Calender</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onView={Views.WEEK}
      />
    </div>
  )
}
