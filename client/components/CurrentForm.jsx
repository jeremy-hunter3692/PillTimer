import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTodaysFormData } from '../Actions/formActions'

export default function CurrentForm() {
  const currentFormData = useSelector((state) => state.currentFormData)

  const [form, setForm] = useState(currentFormData)
  const dispatch = useDispatch()

  useSelector((state) => {
    state
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(setTodaysFormData(form))
  }

  return (
    <div className="notesInput">
      <form onSubmit={handleSubmit}>
        <label htmlFor={title}>
          <h1>
            <strong>
              {title}
              {/* {data.submitted} */}
            </strong>
          </h1>
        </label>
        {bool && (
          <div>
            <input className="clickMe" type="submit" value="submit all notes" />
          </div>
        )}
        <textarea
          className="textBox"
          type="text"
          id={title}
          name={formName}
          value={form}
          onChange={handleChange}
          size="sm"
        ></textarea>
      </form>
    </div>
  )
}

{
  /* TODO implement clear buttone <button
className="clickMe"
onClick={(e) => {
  e.preventDefault()
  // setData(initialData)
}}
>
Clear text
</button> */
}
