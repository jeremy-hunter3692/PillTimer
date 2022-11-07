import React, { useState, useEffect } from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { addEvents } from '../Actions/eventsActions'

const localizer = momentLocalizer(moment)
let eventData = []

export default function MyCalendar({ student, noOfWeeks }) {
  const dispatch = useDispatch()
  const eventState = useSelector((state) => state.events)

  const [events, setEvents] = useState([])
  const [newEvents, setNewEvents] = useState([])

  useEffect(() => {
    // console.log('use', eventState)
    if (Object.keys(eventState).length < 1) {
      console.log(' no eventData')
    } else {
      eventData = eventState?.map((x) => {
        return {
          ...x,
          start: new Date(x.start),
          end: new Date(x.end),
          title: x.name,
        }
      })
      setEvents(eventData)
    }
  }, [eventState])

  function createWeeklyEvent(newEvent, length) {
    const weeklyEvents = [newEvent]
    for (let i = 1; i < length; i++) {
      let newDate = {
        ...newEvent,
        start: new Date(weeklyEvents[i - 1].start.valueOf()),
        end: new Date(weeklyEvents[i - 1].end.valueOf()),
      }
      newDate.start.setDate(newDate.start.getDate() + 7)
      newDate.end.setDate(newDate.end.getDate() + 7)

      weeklyEvents.push(newDate)
    }
    return weeklyEvents
  }

  function handleSelect(start, end) {
    // console.log('onselecetedslot')
    addEvent(start, end)
  }

  function addEvent({ start, end }) {
    let length = noOfWeeks
    let title = student.name
    //TODO get teacher id on load/implement teacher IDS
    let teacher = 4
    // imrpove this logic/defnsive stuff
    if (title != ' ') {
      // console.log('if', title, length)
      let newEvent = {
        start: start,
        end: end,
        title: title,
        name: title,
        studentNotes: '',
        teacherNotes: '',
        studentId: student.id,
        teacherId: teacher,
      }

      let newEventsArr =
        length > 0 ? createWeeklyEvent(newEvent, length) : [newEvent]

      setNewEvents(newEventsArr)
      // dispatch(addEvents(resultArr))
      setEvents([...events, ...newEventsArr])
    }
  }

  //TO DO save on navigate away??
  function submit() {
    dispatch(addEvents(newEvents))
  }

  return (
    <div>
      <button onClick={submit}>Save Calendar Events</button>
      <h1>Calender</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
        defaultView={Views.DAY}
        selectable={true}
        onSelectSlot={handleSelect}
        longPressThreshold={10}
      />
    </div>
  )
}
