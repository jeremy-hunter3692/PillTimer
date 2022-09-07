import React, { useState } from 'react'
// const initialData = { name: '', submitted: 'notthing submitted' }

export default function CurrentForm({ title, handelChange, state, formName }) {

  function localHandleChange(e) {
    handelChange([e.target.name], e.target.value)
  }

  //Submits the form text contents when the submit button is clicked
  function handleSubmit(e) {
    e.preventDefault()
    // setData({ ...initialData, submitted: 'submitted' })
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
        <textarea
          className="textBox"
          type="text"
          id={title}
          name={formName}
          value={state[formName]}
          onChange={localHandleChange}
          size="sm"
        ></textarea>
        <input className="clickMe" type="submit" />
        {/* clear the input feild */}
        <button
          className="clickMe"
          onClick={(e) => {
            e.preventDefault()
            // setData(initialData)
          }}
        >
          Clear text
        </button>
      </form>
    </div>
  )
}
