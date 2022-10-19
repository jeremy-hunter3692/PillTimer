import React, { useState, useEffect } from 'react'
import { getAllStudents } from '../studentsAPI'
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
  // console.log('form', form)
  useEffect(() => {
    getAllStudents()
      .then((data) => {
        setStudents(data)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function handleChange(e) {
    e.preventDefault()
    //look into this drop down option thing
    const selectedIndex = e.target.options.selectedIndex
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      id: e.target.options[selectedIndex].getAttribute('datakey'),
    })
    selected = students[selectedIndex - 1].name
  }

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  function getWeeks(e) {
    e.preventDefault()
    setWeeks(e.target.value)
    console.log('week', e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <header>
        <h1>Students:</h1>
      </header>

      <form onSubmit={handleSubmit} className="form">
        <div>
          <select
            id={students.id}
            name="name"
            defaultValue=""
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Choose student
            </option>
            {students.map((students) => (
              <option
                key={students.id}
                datakey={students.id}
                value={students.name}
                title="Which student"
              >
                {students.name}
              </option>
            ))}
          </select>
          <select
            id={students.id}
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
      <h2>Selected student: {selected}</h2>
      <MyCalendar student={form} recurringNumber={weeks} />
    </>
  )
}
