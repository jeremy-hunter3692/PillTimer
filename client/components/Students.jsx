import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import MyCalendar from './CalendarContainer.jsx'

const initForm = {
  name: ' ',
  id: ' ',
}
let selected = 'None'

export default function Students() {
  const [students, setStudents] = useState([])
  const [form, setForm] = useState(initForm)
  const [weeks, setWeeks] = useState(0)
  const [detailsPop, setDetailPop] = useState(false)
  const studentsData = useSelector((state) => state.students)
  console.log('students', studentsData)
  //getting names of students
  // useEffect(() => {
  //   setStudents(studentsData)
  //   console.log('students use', students)
  // }, [studentsData])

  //Handle Student selector change
  function handleChange(e) {
    e.preventDefault()
    //look into this drop down option thing
    const selectedIndex = e.target.options.selectedIndex
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      id: Number(e.target.options[selectedIndex].getAttribute('datakey')),
    })
    selected = students[selectedIndex - 1].name
  }
  //For the number of reocurring events TODO better way than an array of numbers...
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10]

  function getWeeks(e) {
    e.preventDefault()
    setWeeks(e.target.value)
    console.log('week', e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }
  //bool for siplaying adding new event
  function newEvent(e) {
    e.preventDefault()
    setDetailPop(!detailsPop)
  }
  return (
    <>
      <button onClick={newEvent}>
        <strong>Add New Event</strong>
      </button>
      {detailsPop ? (
        <div className="students">
          <header>
            <h1>New Session</h1>
          </header>
          <form onSubmit={handleSubmit} className="form">
            <div>
              <select
                id={studentsData.id}
                name="name"
                defaultValue=""
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Choose student
                </option>
                {studentsData.map((studentsData) => (
                  <option
                    key={studentsData.id}
                    datakey={studentsData.id}
                    value={studentsData.name}
                    title="Which student"
                  >
                    {studentsData.name}
                  </option>
                ))}
              </select>
              <select
                id={studentsData.id}
                name="weeks"
                defaultValue=""
                onChange={getWeeks}
              >
                <option value="" disabled>
                  Recurring?
                </option>
                {numbers.map((x) => {
                  return (
                    <option key={x} value={x} title="How many weeks">
                      {x}
                    </option>
                  )
                })}
              </select>
            </div>
          </form>
          <h3>New Session - Student: {selected}</h3>
          <h4>How many weeks: {weeks}</h4>
        </div>
      ) : (
        ''
      )}
      <MyCalendar student={form} noOfWeeks={weeks} />
    </>
  )
}
