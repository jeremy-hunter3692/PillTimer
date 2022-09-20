import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTodaysFormData } from '../Actions/currentFormActions'

export default function CurrentForm(props) {
  const [form, setForm] = useState(props.state)
  const dispatch = useDispatch()
  // const { studentNotes } = form
  console.log('props', props)
  function handleChange(e) {
    // setForm({ ...form, [e.target.name]: e.target.value })
    dispatch(
      setTodaysFormData({ ...props.state, [e.target.name]: e.target.value })
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    // dispatch(setTodaysFormData(form))
  }

  return (
    <div className="notesInput">
      <form onSubmit={handleSubmit}>
        <label htmlFor={props.title}>
          <h1>
            <strong>{props.title}</strong>
          </h1>
        </label>

        <div>
          <input className="clickMe" type="submit" value="submit all notes" />
        </div>

        <textarea
          className="textBox"
          type="text"
          id={props.title}
          name={props.formName}
          value={props.value}
          onChange={props.bool && handleChange}
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
