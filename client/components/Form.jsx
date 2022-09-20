import React from 'react'
import { useDispatch } from 'react-redux'
import { setTodaysFormData } from '../Actions/currentFormActions'
import { addSession } from '../apiClient'

export default function CurrentForm(props) {
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
    addSession(props.state)
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
          readOnly={!props.onChangeBool}
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
