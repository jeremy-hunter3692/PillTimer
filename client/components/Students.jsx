import React, { useState, useEffect } from 'react'
import { getAllStudents } from '../studentsAPI'
import MyCalendar from './CalendarContainer.jsx'
const initForm = {
  name: ' ',
  id: ' ',
}

export default function Students() {
  const [students, setStudents] = useState([])
  const [form, setForm] = useState(initForm)
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

  function handleSubmit(e) {
    e.preventDefault()
  }
  function handleChange(e) {
    e.preventDefault()
    //look into this drop down option thing

    const selectedIndex = e.target.options.selectedIndex
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      id: e.target.options[selectedIndex].getAttribute('datakey'),
    })
  }

  return (
    <>
      <header>
        <h1>Students</h1>
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
        </div>
      </form>
      <MyCalendar student={form.name} />
    </>
  )
}
