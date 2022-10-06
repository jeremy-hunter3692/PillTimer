import React, { useState, useEffect } from 'react'
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
  console.log(events)
  //TO DO adding new event

  // const [newEvent, setNewEvent] = useState(initEvent)
  //  const clickRef = useRef
  // useEffect(()=>{
  // return () => {
  //   window.clearTimeout(clickRef?.current)
  // }
  //  },[])

  function handleSelect({ start, end }) {
    const title = window.prompt('New Event name')
    if (title) {
      let newEvent = {
        start: start,
        end: end,
        title: title,
      }
      console.log('one')
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
