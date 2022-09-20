import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setTodaysFormData } from '../Actions/currentFormActions'
import { addSession } from '../apiClient'

export default function CurrentForm(props) {
  const [submitted, setSubmitted] = useState(false)
  const dispatch = useDispatch()

  function handleChange(e) {
    dispatch(
      setTodaysFormData({ ...props.state, [e.target.name]: e.target.value })
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    //adds to the databse via api client
    //if you refresh after adding it it should then be in the last session page.
    console.log('submitted')
    addSession(props.state)
    //TODO look at redierect. code from class teusday week 6 fruits
    //bit of a janky way to show that something has happenened at the moment will change this to a rediect later
    setSubmitted(true)
  }

  return (
    <div className="notesInput">
      {submitted && <h1>All Notes Submitted</h1>}
      <form onSubmit={handleSubmit}>
        <label htmlFor={props.title}>
          <h1>
            <strong>{props.title}</strong>
          </h1>
        </label>

        <div>
          {props.buttonBool && (
            <input className="clickMe" type="submit" value="submit all notes" />
          )}
        </div>

        <textarea
          className="textBox"
          type="text"
          id={props.title}
          name={props.formName}
          value={props.value}
          onChange={props.onChangeBool ? handleChange : undefined}
          size="sm"
          // readOnly={!submitted && !props.onChangeBool}
          readOnly={props.onChange}
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
