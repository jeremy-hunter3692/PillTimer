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
const eventsData = [
  {
    start: new Date(2022, 9, 5),
    end: new Date(2022, 9, 5),
    title: 'First event',
  },
  {
    start: new Date(2022, 9, 2),
    end: new Date(2022, 9, 5),
    title: 'Second event',
  },
  {
    start: new Date(2022, 9, 6),
    end: new Date(2022, 9, 7),
    title: 'Third event',
  },
]

export default function MyCalendar(props) {
  const [events, setEvents] = useState(eventsData)
  const [newEvent, setNewEvent] = useState(initEvent)
  // const [view, setView] = useState(views.week)
  const view = Views.WEEK
  return (
    <div>
      <h1>Calender</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        view={view}
      />
    </div>
  )
}
