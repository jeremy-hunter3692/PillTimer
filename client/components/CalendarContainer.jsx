import React, { useState, useEffect } from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { addEvents } from '../Actions/eventsActions'

// import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)
let eventData = []

export default function MyCalendar({ student, noOfWeeks }) {
  const dispatch = useDispatch()
  const eventState = useSelector((state) => state.events)
  console.log('contain', student, noOfWeeks)
  // const studentState = useEffect((state)=> state.students)

  // console.log(eventData)
  const [events, setEvents] = useState(eventData)
  // console.log(events)
  const [newEvents, setNewEvents] = useState([])
  // console.log('compare events', events, 'newEvents', newEvents)

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

  // console.log('events:', events)

  function createWeeklyEvent(newEvent, length) {
    // console.log('length', length, 'event', newEvent)
    const weeklyEvents = [newEvent]
    for (let i = 1; i < length; i++) {
      let newDate = {
        ...newEvent,
        start: new Date(weeklyEvents[i - 1].start.valueOf()),
        end: new Date(weeklyEvents[i - 1].end.valueOf()),
      }
      newDate.start.setDate(newDate.start.getDate() + 7)
      newDate.end.setDate(newDate.end.getDate() + 7)
      // newDate.setDate(newDate.getDate() + 7)

      weeklyEvents.push(newDate)
    }
    // console.log('arr', weeklyEvents)
    return weeklyEvents
  }

  function handleSelect(start, end) {
    // console.log('onselecetedslot')
    addEvent(start, end)
  }

  function addEvent({ start, end }) {
    let length = noOfWeeks
    let title = student.name
    console.log('addevent', title)
    //TODO get teacher id on load?
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

      console.log('newevets', newEventsArr)
      setNewEvents(newEventsArr)
      console.log('2', newEvents)
      // dispatch(addEvents(resultArr))
      setEvents([...events, ...newEventsArr])
      console.log('evts', events, 'new', newEvents)
    }
  }

  //save on navigate away??
  function submit() {
    console.log('on submit events', events, 'newEvents', newEvents)
    dispatch(addEvents(newEvents))
  }

  return (
    <div>
      <button onClick={submit}>submit events</button>
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
